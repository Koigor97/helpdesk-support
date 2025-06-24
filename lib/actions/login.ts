"use server";

import { loginSchema } from "@/utils/zodSchemas";
import {cookiesClient} from "@/lib/supabase-clients/cookiesClient";


export type LoginState = {
    error?: {
        email?: string[];
        password?: string[];
    }
}

export const loginAction = async (prevState: LoginState, formData: FormData) => {
    
    const rawEmail = formData.get("email");
    const email = typeof rawEmail === "string" ? rawEmail : "";

    const rawPassword = formData.get("password");
    const password = typeof rawPassword === "string" ? rawPassword : "";

    console.log("Login Action", { email, password });

    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
        const error = result.error.flatten();
        return {
            ...prevState,
            error: {
                email: error.fieldErrors.email || [],
                password: error.fieldErrors.password || []
            }
        };
    }


    const supabase = await cookiesClient();
    const bucket = supabase.storage.listBuckets();
    console.log(bucket)


    return {}
}
