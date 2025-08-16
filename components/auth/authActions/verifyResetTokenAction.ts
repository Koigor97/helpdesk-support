"use server"

import {cookiesClient} from "@/lib/supabase-clients/cookiesClient";

export type VerifyResetTokenState = {
    valid?: boolean;
    message?: string;
}

export async function verifyResetTokenAction(email: string, tokenHash: string): Promise<VerifyResetTokenState> {

    const supabase = await cookiesClient()

    // Verify the hashed token - this creates a short-lived recovery session on success
    const {error} = await supabase.auth.verifyOtp({
        type: "recovery",
        token_hash: tokenHash,
    })

    if (error) {
        return { valid: false, message: error.message }
    }

    // Ensure the session user matches the email in the URL
    const { data: userData } = await supabase.auth.getUser();
    const sessionEmail = userData?.user?.email ?? "";

    if (!sessionEmail || sessionEmail.toLowerCase() !== email.toLowerCase()) {
        return { valid: false, message: "Email mismatch." };
    }

    return { valid: true };
}