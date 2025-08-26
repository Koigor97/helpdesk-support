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

    const [hostname] = getHostnameAndPort(req)

    const superbaseAdmin  = sbAdminClient()

    const { data: tenantData, error: tenantError} = await superbaseAdmin
        .from("tenants")
        .select("*")
        .eq("domain", hostname)
        .single()

    if (tenantError) {
        return NextResponse.rewrite(new URL("/not-found", req.url));
    }

    const requestedPath = req.nextUrl.pathname;

    const tenant = tenantData.id;
    const appPath  = requestedPath;

    if ( !/[a-z0-9-_]+/.test(tenant)){
        return NextResponse.rewrite(new URL(`/not-found?tenant=${tenant}`, req.url));
    }

    if (appPath.startsWith("/tickets")){
        if (!sessionUser?.user){
            return NextResponse.redirect(buildUrl("/", tenant, req));

        } else if (!sessionUser?.user.app_metadata?.tenants.includes(tenant)){
            return NextResponse.rewrite(new URL(`/not-found?tenant=${tenant}`, req.url));
        }

    } else if (appPath === "/") {
        if (sessionUser?.user) {
            return NextResponse.redirect(buildUrl("/tickets", tenant, req));
        }
    }

    console.log(req.url)

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
