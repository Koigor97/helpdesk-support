"use server"

import {SignupFormSchema} from "@/schemas/signupSchema";
import {SignupState} from "@/utils/types";
import {cookiesClient} from "@/lib/supabase-clients/cookiesClient";


export async function signupAction(prevState: SignupState, formData: FormData): Promise<SignupState> {
    // Extract form data
    const signupData = {
        email: formData.get("email"),
        fullName: formData.get("fullName"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    }

    try {
        // Validate form data
        const validatedFields = SignupFormSchema.safeParse(signupData)

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid form data.",
            }
        }

        const { email, fullName, password } = validatedFields.data

        // Sign up user with Supabase Auth
        const supabase = await cookiesClient()

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                },
                emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
            },
        })

        if (error) {
            if (error.message.includes("User already registered")) {
                return {
                    errors: {
                        email: ["An account with this email already exists."],
                    },
                    message: "Account already exists.",
                }
            }

            return {
                errors: {
                    _form: [error.message],
                },
                message: "Signup failed.",
            }
        }

        if (!data.user) {
            return {
                errors: {
                    _form: ["Signup failed. Please try again."],
                },
                message: "Signup failed.",
            }
        }

        // Check if email confirmation is required
        if (!data.session) {
            return {
                success: true,
                message: "Please check your email to confirm your account before signing in.",
            }
        }

        // User is automatically signed in
        return {
            success: true,
            message: "Account created successfully! Redirecting...",
            redirectTo: "/onboarding",
        }
    } catch (error) {
        console.error("Signup action error:", error)
        return {
            errors: {
                _form: ["An unexpected error occurred. Please try again."],
            },
            message: "Signup failed.",
        }
    }
}
