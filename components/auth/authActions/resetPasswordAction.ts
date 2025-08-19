"use server"

import {cookiesClient} from "@/lib/supabase-clients/cookiesClient";

export type ResetPasswordState = {
    error?: string;
    success?: boolean;
    message?: string;
}

export async function resetPasswordAction(prevState: ResetPasswordState, formData: FormData): Promise<ResetPasswordState> {

    const supabase = await cookiesClient()

    const newPassword = String(formData.get("newPassword") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? ""); // match the form field name

    if (!newPassword || !confirmPassword) {
        return { error: "Field is required", message: "Please enter a new password.", success: false };
    }

    if (newPassword !== confirmPassword) {
        return { error: "Don't match", message: "Passwords do not match.", success: false };
    }

    if (newPassword.length < 8) {
        return { error: "Too short", message: "Password must be at least 8 characters.", success: false };
    }

    // A valid recovery session must already exist (set by verifyResetTokenAction)
    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
        return { error: error.name, success: false, message: error.message };
    }

    // I can optionally redirect here instead of returning success.
    // redirect("/?magicLink=no")  // If you do, place it outside try/catch in your own structure.

    return { success: true, message: "Password updated successfully." };
}