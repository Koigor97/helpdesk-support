import {NextResponse, NextRequest} from "next/server";
import {middlewareClient} from "@/lib/supabase-clients/middlewareClient";


export const config = {
    matcher: ["/((?!.*\\.).*)"]
}


export async function middleware(req: NextRequest) {

    const { supabase, response } = await middlewareClient(req);
    const {data: {session: sessionUser}} = await supabase.auth.getSession()
    const requestedPath = req.nextUrl.pathname;

    const [tenant, ...restOfUrlPath] = requestedPath.substring(1).split("/")
    const appPath  = "/" + restOfUrlPath.join("/");

    if ( !/[a-z0-9-_]+/.test(tenant)){
        return NextResponse.rewrite(new URL(`/not-found?tenant=${tenant}`, req.url));
    }

    if (appPath.startsWith("/tickets")){
        if(!sessionUser?.user){
            return NextResponse.redirect(new URL(`/${tenant}`, req.url));
        }
    } else if (appPath === "/") {
        if(sessionUser?.user) {
            return NextResponse.redirect(new URL(`/${tenant}/tickets`, req.url));
        }
    }

    return response.value;

}
