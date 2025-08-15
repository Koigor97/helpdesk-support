"use server"

import {sbAdminClient} from "@/lib/supabase-clients/adminClient";
import {passwordResetEmailHtml} from "@/templates/passwordResetEmail";
import nodemailer from "nodemailer";


export type PasswordResetProp = {
    success: boolean;
    message: string;
}

export async function requestPasswordResetEmail(email: string): Promise<{
    success: boolean;
    message: string;
}> {
    const supabaseAdmin = sbAdminClient()

    const {data, error} = await supabaseAdmin.auth.admin.generateLink({
        email,
        type: "recovery"
    })

    if(!data.user) {
        return {
            success: false,
            message: `Failed to send the recovery email`,
        }
    }

    const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
    const resetHashedToken = data?.properties?.hashed_token
    const resetPasswordLink = new URL(`/reset-password?hashed_reset_token=${resetHashedToken}`, origin).toString()

    const html = passwordResetEmailHtml(email, resetPasswordLink)

    const transporter  = nodemailer.createTransport({
        host: "127.0.0.1",
        port: 54325,
        secure: false,
    })

    await transporter.sendMail({
        from: "WetinHapin <no-reply@wetinhapin.local>",
        to: email,
        subject: "Reset Your Password",
        html: html
    })

    return {
        success: true,
        message: "If an account with that email exists, we've sent a password reset link.",
    }
}