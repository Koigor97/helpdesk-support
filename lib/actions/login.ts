"use server";

import { loginSchema, verifyotp } from "@/utils/zodSchemas";


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


    return {}
}

export type VerifyState = {
    error?: {
        otp?: string[]
    }
}

export const verifyotpcode = async (prevState: VerifyState, formData: FormData) => {
    const rawOTP = formData.get("otpCode");
    console.log("VerifyState", rawOTP );

    const otp = typeof rawOTP === "string" ? rawOTP : "";
    const result = verifyotp.safeParse({otp})

    if (!result.success) {
        const error = result.error.flatten();
        return {
            ...prevState,
            error: {
                otp: error.fieldErrors.otp || [],
            }
        }
    }
}