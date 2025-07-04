"use server"
import { cookies } from "next/headers";
import { VerifyOTPSchema, ResendOTPSchema} from "@/schemas/authSchema";
import {type VerifyOTPState, type ResendOTPState} from "@/utils/types"
import {cookiesClient} from "@/lib/supabase-clients/cookiesClient";

export async function verifyOTPAction(prevState: VerifyOTPState, formData: FormData): Promise<VerifyOTPState> {
    // Extract form data
    const theFormData = {
        otpCode: formData.get("otpCode"),
        email: formData.get("email") || prevState.email,
    }

    const supabaseSSR = await cookiesClient()

    try {
        // Validate form data
        const validatedFields = VerifyOTPSchema.safeParse(theFormData)

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
}

export async function resendOTPAction(prevState: ResendOTPState, formData: FormData): Promise<ResendOTPState> {
    // Extract form data
    const theFormData = {
        email: formData.get("email"),
    }

    const supabaseSSR = await cookiesClient()

    try {
        // Validate form data
        const validatedFields = ResendOTPSchema.safeParse(theFormData)

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid email address.",
            }
        }

        const { email } = validatedFields.data

        // Resend OTP via Supabase
        const { error } = await supabaseSSR.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
            },
        })

        if (error) {
            // Handle rate limiting
            if (error.message.includes("rate limit")) {
                return {
                    errors: {
                        _form: ["Too many requests. Please wait before requesting another code."],
                    },
                    message: "Rate limited.",
                }
            }

            return {
                errors: {
                    _form: [error.message],
                },
                message: "Failed to resend code.",
            }
        }

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
