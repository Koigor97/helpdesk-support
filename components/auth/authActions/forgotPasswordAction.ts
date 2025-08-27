"use server"

import {sbAdminClient} from "@/lib/supabase-clients/adminClient";
import {passwordResetEmailHtml} from "@/templates/passwordResetEmail";
import nodemailer from "nodemailer";
import {generateLink} from "@/lib/email/generateLink";
import {sendEmail} from "@/lib/email/mailer";


export type PasswordResetProp = {
    success: boolean;
    message: string;
}

export async function requestPasswordResetEmail(
    email: string,
    tenant: string
): Promise<PasswordResetProp> {
    const supabaseAdmin = sbAdminClient()

    try {
        const { data, error } = await supabaseAdmin.auth.admin.generateLink({
            email,
            type: "recovery",
        });

        // For privacy, we do not reveal whether the email exists:
        if (error || !data?.user) {
            // Still return success message to the user to prevent enumeration
            return {
                success: true,
                message: "If an account with that email exists, we've sent a password reset link.",
            };
        }

        const resetHashedToken = data.properties?.hashed_token ?? "";
        const resetLink = await generateLink("/reset-password", {
            email,
            hashed_reset_token: resetHashedToken,
        })
        const html = passwordResetEmailHtml(email, resetLink);
        await sendEmail({
            to: email,
            subject: "Reset Your Password",
            html
        })

        return {
            success: true,
            message: "If an account with that email exists, we've sent a password reset link.",
        };
    } catch (_) {
        // The same idea. We do not leak details; keep the same message.
        return {
            success: true,
            message: "If an account with that email exists, we've sent a password reset link.",
        };
    }
}