"use server";

import { LoginFormSchema, MagicLinkSchema } from "@/schemas/authSchema";
import {type LoginState} from "@/utils/types";
import {cookiesClient} from "@/lib/supabase-clients/cookiesClient";
import {redirect} from "next/navigation";


export const loginAction = async (prevState: LoginState, formData: FormData): Promise<LoginState> => {

    // Extract form data
    const theFormData = {
        email: formData.get("email"),
        password: formData.get("password"),
    }

    // Determine if this is a magic link or password login
    const isMagicLink = !theFormData.password

    const supabaseSSR = await cookiesClient()

    try {
        if (isMagicLink) {
            // Validate magic link data
            const validatedFields = MagicLinkSchema.safeParse({
                email: theFormData.email,
            })

            if (!validatedFields.success) {
                return {
                    errors: validatedFields.error.flatten().fieldErrors,
                    message: "invalid form data"
                }
            }

            const {email} = validatedFields.data;

            // Check if user exists in database first
            const {data: existingUser, error: userCheckError} = await supabaseSSR
                .from("auth.users")
                .select("id, email")
                .eq("email", email)
                .single()


            // Alternative approach if direct auth.users access is restricted
            // You can create a custom function in Supabase or use a profiles table
            if (userCheckError && userCheckError.code === "PGRST116") {
                // User not found
                return {
                    errors: {
                        email: ["No account found with this email address. Please sign up first."],
                    },
                    message: "Account not found.",
                }
            }

            if (userCheckError) {
                console.error("User check error:", userCheckError)
                return {
                    errors: {
                        _form: ["Unable to verify account. Please try again."],
                    },
                    message: "Verification failed.",
                }
            }

            // User exists, send magic link
            const {error} = await supabaseSSR.auth.signInWithOtp({
                email: validatedFields.data.email,
                options: {
                    emailRedirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/verify-otp?email=${encodeURIComponent(email)}`,
                }
            })

            if (error) {
                return {
                    errors: {
                        _form: [error.message]
                    },
                    message: 'Failed to send magic link'
                }
            }

            return {
                success: true,
                message: "Magic link sent! Check your email.",
                redirectTo: `/verify-otp?email=${encodeURIComponent(email)}`
            }
        } else {
            // Validate password login data
            const validatedFields = LoginFormSchema.safeParse({
                theFormData
            })

            if (!validatedFields.success) {
                return {
                    errors: validatedFields.error.flatten().fieldErrors,
                    message: "Invalid form data"
                }
            }

            // Attempt password login
            const {data, error} = await supabaseSSR.auth.signInWithPassword({
                email: validatedFields.data.email,
                password: validatedFields.data.password,
            })

            if (error) {
                // Handle specific auth errors
                if (error.message.includes("Invalid login credentials")) {
                    return {
                        errors: {
                            _form: ["Invalid email or password"]
                        }
                    }
                }

                if (error.message.includes("Email not confirmed")) {
                    return {
                        errors: {
                            _form: ["Please verify your email address before signing in."],
                        },
                        message: "Email verification required.",
                    }
                }

                return {
                    errors: {
                        _form: [error.message],
                    },
                    message: "Login failed.",
                }
            }

            if (!data.user) {
                return {
                    errors: {
                        _form: ["Login failed. Please try again."],
                    },
                    message: "Login failed.",
                }
            }

            // Success - redirect will happen after this return
            return {
                success: true,
                message: "Login successfully",
                redirectTo: `/tickets`
            }
        }
    } catch (error) {
        console.error("Login action error:", error)
        return {
            errors: {
                _form: ["An unexpected error occurred. Please try again."],
            },
            message: "Login failed.",
        }
    }
}


// OAuth login action
// export async function signInWithOAuth(provider: "google" | "microsoft") {
//
//     const supabaseSSR = await cookiesClient()
//
//     const {data, error} = await supabaseSSR.auth.signInWithOAuth({
//         provider: provider,
//         options: {
//             redirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/callback`
//         },
//     })
//
//     if (error) {
//         throw new Error(`OAuth login failed: ${error.message}`)
//     }
//
//     if (data.url) {
//         redirect(data.url)
//     }
// }
