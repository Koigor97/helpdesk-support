import {NextResponse, NextRequest} from "next/server";
import {middlewareClient} from "@/lib/supabase-clients/middlewareClient";


export const config = {
    matcher: ["/((?!.*\\.).*)"]
}


export async function middleware(req: NextRequest) {

    const { supabase, response } = await middlewareClient(req);
    const {data: {session: sessionUser}} = await supabase.auth.getSession()
    const requestedPath = req.nextUrl.pathname;

    if(requestedPath.startsWith("/tickets")){
        if(!sessionUser?.user){
            return NextResponse.redirect(new URL("/", req.url));
        }
    } else if (requestedPath === "/") {
        if(sessionUser?.user) {
            return NextResponse.redirect(new URL("/tickets", req.url));
        }
    }

    return response.value;

}
