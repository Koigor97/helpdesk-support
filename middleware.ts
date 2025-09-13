import { NextResponse, NextRequest } from "next/server";

import { middlewareClient } from "@/lib/supabase-clients/middlewareClient";
import {buildUrl, getHostnameAndPort} from "@/lib/globalHelpers";
import {sbAdminClient} from "@/lib/supabase-clients/adminClient";

export const config = {
    matcher: ["/((?!.*\\.).*)"]
}

export async function middleware(req: NextRequest) {
    const { supabase, response } = await middlewareClient(req);
    const {data: sessionUser} = await supabase.auth.getUser()

    // Tenant resolution
    const [hostname] = getHostnameAndPort(req)
    const superbaseAdmin  = sbAdminClient()

    const { data: tenantData, error: tenantError} = await superbaseAdmin
        .from("tenants")
        .select("*")
        .eq("domain", hostname)
        .maybeSingle()

    if (tenantError || !tenantData) {
        return NextResponse.rewrite(new URL("/not-found", req.url));
    }

    const requestedPath = req.nextUrl.pathname;
    const tenant = tenantData.id;
    const appPath  = requestedPath;

    // Validate tenant slug format
    if ( !/[a-z0-9-_]+$/.test(tenant)){
        return NextResponse.rewrite(new URL(`/not-found?tenant=${tenant}`, req.url));
    }

    // Auth guards (lenient first, strict later)
    if (appPath.startsWith("/tickets")){
        // In case: No session yet, let the frontend handle the login redirect
        if (!sessionUser?.user){
            return NextResponse.next()

        }

        // In case: User logged in but tenant is mismatch
        if (!sessionUser?.user.app_metadata?.tenants.includes(tenant)){
            return NextResponse.rewrite(new URL(`/not-found?tenant=${tenant}`, req.url));
        }

    } else if (appPath === "/") {
        // If logged in, forward to dashboard
        if (sessionUser?.user) {
            return NextResponse.redirect(buildUrl("/tickets", tenant, req));
        }
    }

    console.log(req.url)
    // Rewrite with supabase cookies intact
    const rewrittenResponse = NextResponse.rewrite(
        new URL(`/${tenant}${appPath}${req.nextUrl.search}`, req.url),
        { request: req }
    );

    const cookiesToSet = response.value.cookies.getAll();
    cookiesToSet.forEach(({ name, value }) => {
        rewrittenResponse.cookies.set(name, value, options)
    })

    return rewrittenResponse;

}
