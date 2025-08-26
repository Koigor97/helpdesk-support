"use server"

import {sbAdminClient} from "@/lib/supabase-clients/adminClient";
import {passwordResetEmailHtml} from "@/templates/passwordResetEmail";
import nodemailer from "nodemailer";
import {headers} from "next/headers";


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

        const header = await headers();
        const host  = header.get("host") ?? "localhost:3000";
        const proto = header.get("x-forwarded-proto") ?? "http";
        const origin = `${proto}://${host}`;

        const url = new URL(`/reset-password`, origin);

        const resetHashedToken = data.properties?.hashed_token ?? "";
        url.searchParams.set("email", email);
        url.searchParams.set("hashed_reset_token", resetHashedToken);
        const resetPasswordLink = url.toString();

        const html = passwordResetEmailHtml(email, resetPasswordLink);

        const transporter = nodemailer.createTransport({
            host: "127.0.0.1",
            port: 54325,
            secure: false,
            tls: { rejectUnauthorized: false },
            connectionTimeout: 5000,
        });

        await transporter.sendMail({
            from: "WetinHapin <no-reply@wetinhapin.local>",
            to: email,
            subject: "Reset Your Password",
            html,
        });

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