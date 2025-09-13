"use server"

import {SignupFormSchema} from "@/components/auth/authSchema/authSchema";
import {SignupState} from "@/components/auth/authType/authTypes";
import { sbAdminClient } from "@/lib/supabase-clients/adminClient";
import {Tables} from "@/utils/supabase-db-types";
import {generateLink} from "@/lib/email/generateLink";
import {sendEmail} from "@/lib/email/mailer";
import {accountActivationEmailHtml} from "@/templates/accoutActivationEmail";


type TenantRow = Tables<"tenants">
type UserProfiles = Tables<"user_profiles">
type TenantPermissions = Tables<"tenant_permissions">


export async function signupAction(prevState: SignupState, formData: FormData): Promise<SignupState> {
    // Extract form data
    const email = String(formData.get("email") ?? "");
    const fullName = String(formData.get("fullName") ?? "");
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");
    const tenant = String(formData.get("tenant") ?? "");

    try {
        // Validate form data
        const validatedFields = SignupFormSchema.safeParse({
            email,
            fullName,
            password,
            confirmPassword,
        })

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid form data.",
                success: false
            }
        }


        // Sign up user with Supabase Auth
        const supabaseAdmin = sbAdminClient()
        const tenantEmailHost = validatedFields.data.email.split("@")[1] ?? "";

        const { data: tenantData, error: tenantError } = await supabaseAdmin
            .from("tenants")
            .select("*")
            .eq("id", tenant)
            .eq("domain", tenantEmailHost)
            .maybeSingle();


        if (tenantError || !tenantData) {
            return {
                success: false,
                message: "invalid email domain for this tenant",
                errors: {email: [`Use your ${tenantEmailHost || "company"} domain for the ${tenant}.`]}
            }
        }


        const { data: userData, error: userError } = await supabaseAdmin.auth.admin.createUser({
            email: validatedFields.data.email,
            password: validatedFields.data.password,
            app_metadata: {
                tenants: [tenant],
            }
        })

        if (userError) {
            const msg = userError.message.toLowerCase()

            if (msg.includes("already been registered") || msg.includes("already exist")) {
                return {
                    errors: { email: ["An account with this email already exists."]},
                    message: "Account already exists.",
                    success: false
                }
            }

            return {
                errors: {_form: [userError.message]},
                message: "Signup failed.",
            }
        }


        // Check if email confirmation is required
        if (!userData.user?.email) {
            return {
                success: true,
                message: "Please check your email to confirm your account before signing in.",
            }
        }

        const { data: userProfile } = await supabaseAdmin
            .from("user_profiles")
            .insert({
                full_name: validatedFields.data.fullName,
                supabase_user: userData.user.id,
            })
            .select()
            .single()

        const {error: tenantPermissionError} = await supabaseAdmin
            .from("tenant_permissions")
            .insert({tenant, user_profile: userProfile?.id})

        if (tenantPermissionError) {
            await supabaseAdmin.auth.admin.deleteUser(userData.user.id)
            return {
                errors: {_form: ["Failed to create user. Please try again."]},
                message: "Signup failed.",
                success: false
            }
        }

        const { data: activationLinkData, error: activationLinkError } = await supabaseAdmin.auth.admin.generateLink({
            email: validatedFields.data.email,
            password: validatedFields.data.password,
            type: "signup",
        });

        // For privacy, we do not reveal whether the email exists:
        if (activationLinkError || !activationLinkData?.user) {
            // Still return success message to the user to prevent enumeration
            return {
                success: false,
                message: "Sending activation link was unsuccessful.",
            };
        }

        const activationHashedToken = activationLinkData.properties?.hashed_token ?? "";

        const activationLink = await generateLink("/tickets", {
            email,
            hashed_reset_token: activationHashedToken,
        })

        const html = accountActivationEmailHtml(email, activationLink);

        await sendEmail({
            to: email,
            subject: "Welcome to Your Account",
            html
        })

        // User is automatically signed in
        return {
            success: true,
            message: "Account created successfully! Redirecting...",
        }
    } catch (error) {
        console.error("Signup action error:", error)
        return {
            errors: {_form: ["An unexpected error occurred. Please try again."]},
            message: "Signup failed.",
            success: false
        }
    }
}
