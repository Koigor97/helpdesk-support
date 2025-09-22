"use server";

import { LoginFormSchema, MagicLinkSchema } from "@/components/auth/authSchema/authSchema";
import {type LoginState} from "@/components/auth/authType/authTypes";
import {cookiesClient} from "@/lib/supabase-clients/cookiesClient";
import {redirect} from "next/navigation";
import {sbAdminClient} from "@/lib/supabase-clients/adminClient";
import {buildOtpEmailHTML} from "@/templates/buildOtpEmailHtml";
import {sendEmail} from "@/lib/email/mailer";


// @ts-ignore
export const loginAction = async (prevState: LoginState, formData: FormData): Promise<LoginState> => {

    let redirectTo: string | null = null;

    // Extract form data
    const email =  String(formData.get("email") ?? "")
    const password = String(formData.get("password") ?? "")
    const tenant = String(formData.get("tenant") ?? "");

    // Determine if this is a magic link or password login
    const isMagicLink = !password


    try {
        if (isMagicLink) {
            const supabaseAdmin = sbAdminClient()

            // Validate magic link data
            const validatedFields = MagicLinkSchema.safeParse({
                email: email,
            })

            if (!validatedFields.success) {
                return {
                    errors: validatedFields.error.flatten().fieldErrors,
                    message: "invalid form data",
                    success: false,
                }
            }


            // User exists, send magic link
            const {data: linkData, error} = await supabaseAdmin.auth.admin.generateLink({
                email: validatedFields.data.email,
                type: "magiclink",
            })

            if (error) {
                const msg = error.message?.toLowerCase() || "";
                if (msg.includes("signups not allowed for otp") || msg.includes("user not found")) {
                    return {
                        errors: { email: ["No account found for this email. Please sign up first."] },
                        message: "Account not found.",
                        success: false,
                    };
                }
                return { errors: { _form: [error.message] }, message: "Failed to send magic link", success: false };
            }

            const tenants = linkData.user.app_metadata?.tenants as string[] | undefined;
            if (!Array.isArray(tenants) || !tenants.includes(tenant)) {
                return {
                    errors: { _form: ["Permission denied."] },
                    message: `This user does not have access to ${tenant}.`,
                    success: false,
                };
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


            console.log("Sending email......")
            await sendEmail({
                from: "WetinHapin <no-reply@wetinhapin.local>",
                to: validatedFields.data.email,
                subject: "Magic Link Verification Code",
                html,
            })

            console.log("Email sent!")

            // redirect user to verify-otp page
            redirectTo = `/verifyotp?email=${encodeURIComponent(validatedFields.data.email)}`

        } else {
            const supabase = await cookiesClient()

            // Validate password login data
            const validatedFields = LoginFormSchema
                .safeParse({email, password})

            if (!validatedFields.success) {
                return {
                    errors: validatedFields.error.flatten().fieldErrors,
                    message: "Invalid form data",
                    success: false,
                }
            }

            // Attempt password login
            const {data, error} = await supabase.auth.signInWithPassword({
                email: validatedFields.data.email,
                password: validatedFields.data.password,
            })

            if (error) {
                // Handle specific auth errors
                if (error.message.includes("Invalid login credentials")) {
                    return {errors: {_form: ["Invalid email or password"]}}
                }

                if (error.message.includes("Email not confirmed")) {
                    return {
                        errors: {_form: ["Please verify your email address before signing in."],},
                        message: "Email verification required.",
                        success: false,
                    }
                }

                return {
                    errors: {_form: [error.message]},
                    message: "Login failed.",
                    success: false,
                }
            }

            if (!data.user) {
                return {
                    errors: {_form: ["Login failed. Please try again."]},
                    message: "Login failed.",
                    success: false,
                }
            }

            const tenants = data.user.app_metadata?.tenants as string[] | undefined;
            if (!Array.isArray(tenants) || !tenants.includes(tenant)) {
                await supabase.auth.signOut();
                return {
                    errors: { _form: ["Permission denied."] },
                    message: `This user does not have access to ${tenant}.`,
                    success: false,
                };
            }

            redirectTo = `/tickets`;
        }
    } catch (error) {
        console.error("Login action error:", error)
        return {
            errors: {_form: ["An unexpected error occurred. Please try again."]},
            message: "Login failed.",
            success: false,
        }
    }

    // Success - redirect will happen after this return
    if (redirectTo) redirect(redirectTo)
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
