"use server"

import { cookies } from "next/headers";
import { VerifyOTPSchema, ResendOTPSchema} from "@/components/auth/authSchema/authSchema";
import {type VerifyOTPState, type ResendOTPState} from "@/components/auth/authType/authTypes"
import {cookiesClient} from "@/lib/supabase-clients/cookiesClient";
import {redirect} from "next/navigation";
import {sbAdminClient} from "@/lib/supabase-clients/adminClient";
import {buildOtpEmailHTML} from "@/templates/buildOtpEmailHtml";
import nodemailer from "nodemailer";

export async function verifyOTPAction(prevState: VerifyOTPState, formData: FormData): Promise<VerifyOTPState> {
    // Extract form data
    const theFormData = {
        otpCode: formData.get("otpCode"),
        email: formData.get("email") || prevState.email,
    }

    let redirectTo: string | null = null;

    const supabaseSSR = await cookiesClient()

    try {
        // Validate form data
        const validatedFields = VerifyOTPSchema.safeParse({...theFormData})
        console.log(validatedFields)

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid verification code format.",
                email: prevState.email,
            }
        }

        const { otpCode } = validatedFields.data

        // Get email from state or form data
        const email = prevState.email || (theFormData.email as string)

        if (!email) {
            return {
                errors: {
                    _form: ["Email is required for verification."],
                },
                message: "Verification failed.",
            }
        }

        // Verify OTP with Supabase
        const { data, error } = await supabaseSSR.auth.verifyOtp({
            email,
            token: otpCode,
            type: "email",
        })

        if (error) {
            // Handle specific OTP errors
            if (error.message.includes("Token has expired")) {
                return {
                    errors: {
                        otpCode: ["Verification code has expired. Please request a new one."],
                    },
                    message: "Code expired.",
                    email,
                }
            }

            if (error.message.includes("Invalid token")) {
                return {
                    errors: {
                        otpCode: ["Invalid verification code. Please check and try again."],
                    },
                    message: "Invalid code.",
                    email,
                }
            }

            return {
                errors: {
                    _form: [error.message],
                },
                message: "Verification failed.",
                email,
            }
        }

        if (!data.user) {
            return {
                errors: {
                    _form: ["Verification failed. Please try again."],
                },
                message: "Verification failed.",
                email,
            }
        }

        // Set session cookie (optional, depending on your auth flow)
        if (data.session) {
            const cookieStore = await cookies()
            cookieStore.set("supabase-auth-token", data.session.access_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 60 * 60 * 24 * 7, // 7 days
            })
        }

        // Success - redirect will happen after this return
        return {
            success: true,
            message: "Email verified successfully!",
            email,
        }

        // redirectTo = "/tickets"
    } catch (error) {
        console.error("OTP verification error:", error)
        return {
            errors: {
                _form: ["An unexpected error occurred. Please try again."],
            },
            message: "Verification failed.",
            email: prevState.email,
        }
    }

    // redirect(redirectTo)
}

export async function resendOTPAction(prevState: ResendOTPState, formData: FormData): Promise<ResendOTPState> {
    // Extract form data
    const theFormData = {
        email: formData.get("email"),
    }

    const supabaseAdmin = sbAdminClient()

    try {
        // Validate form data
        const validatedFields = ResendOTPSchema.safeParse(theFormData)

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid email address.",
            }
        }


        // Resend OTP via Supabase
        const {data: linkData, error} = await supabaseAdmin.auth.admin.generateLink({
            email: validatedFields.data.email,
            type: "magiclink",
        })

        if (error) {
            // Handle rate limiting
            if (error.message.includes("rate limit")) {
                return {
                    errors: {_form: ["Too many requests. Please wait before requesting another code."],},
                    message: "Rate limited.",
                }
            }

            return {
                errors: {_form: [error.message],},
                message: "Failed to resend code.",
            }
        }

        const {email_otp: otp, verification_type} = linkData?.properties

        if (!otp) return {errors: {_form: ["OTP not generated. Please try again"]}, success: false};
        if (verification_type === "signup") {
            await supabaseAdmin.auth.admin.deleteUser(linkData.user?.id)
            // @ts-ignore
            return;
        }

        // render react email template
        const html = buildOtpEmailHTML({
            code: otp,
            appName: "WetinHapin",
            expiresInMinutes: 10,
            logoUrl: "http://127.0.0.1/web-app-manifest-192x192.png"
        })

        const transporter = nodemailer.createTransport({
            host: "127.0.0.1",
            port: 54325,
            secure: false,
        })

        console.log("Sending email......")
        await transporter.sendMail({
            from: "WetinHapin <no-reply@wetinhapin.local>",
            to: validatedFields.data.email,
            subject: "Magic Link Verification Code",
            html: html,
        })

        return {
            success: true,
            message: "Verification code sent! Check your email.",
        }
    } catch (error) {
        console.error("Resend OTP error:", error)
        return {
            errors: {
                _form: ["An unexpected error occurred. Please try again."],
            },
            message: "Failed to resend code.",
        }
    }
}
