import {NextResponse, NextRequest} from "next/server";
import {middlewareClient} from "@/lib/supabase-clients/middlewareClient";


export const config = {
    matcher: ["/((?!.*\\.).*)"]
}


export async function middleware(req: NextRequest) {

    const { supabase, response } = await middlewareClient(req);
    const {data: {user: sessionUser}} = await supabase.auth.getUser()
    const requestedPath = req.nextUrl.pathname;

    if(requestedPath.startsWith("/tickets") ||
        requestedPath.startsWith("/reset-password")){
        if(!sessionUser){
            return NextResponse.redirect(new URL("/", req.url));
        }
    } else if (requestedPath === "/") {
        if(sessionUser) {
            return NextResponse.redirect(new URL("/tickets", req.url));
        }
    }

    return response.value;

}
