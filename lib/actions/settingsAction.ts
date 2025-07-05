"use server"

import {revalidatePath} from "next/cache";
import {cookiesClient} from "@/lib/supabase-clients/cookiesClient";

import {
    ProfileSettingsSchema,
    UserPreferencesSchema,
    OrganizationSettingsSchema,
    OrgSettingsSchema,
    SecuritySettingsSchema,
} from "@/schemas/settingsSchema";

import {
    ProfileSettingsState,
    UserPreferencesState,
    OrganizationSettingsState,
    OrgSettingsState,
    SecuritySettingsState,
} from "@/utils/types";


/** ------------------------- SERVER ACTION -------------------- **/

export async function updateProfileSettingsAction(
    prevState: ProfileSettingsState,
    formData: FormData,
) : Promise<ProfileSettingsState> {

    // Getting the data
    const profileSettingsData = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        bio: formData.get("bio"),
        departmentId: formData.get("departmentId"),
    }

    try {
        // validate the profile settings data
        const validatedFields = ProfileSettingsSchema.safeParse(profileSettingsData);

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid form data"
            }
        }

        // get the data
        const {
            fullName,
            email,
            phone,
            bio,
            departmentId
        } = validatedFields.data

        // call the supabase client for server-side
        const supabase = await cookiesClient()

        // get current user
        const {data: {user}, error: userError} = await supabase.auth.getUser()

        if (userError || !user) {
            return {
                errors: {_form: ["Authentication required"]},
                message: "Please log in to update profile."
            }
        }

        // Update profile in database
        const {error} = await supabase
            .from("profiles")
            .update({
                full_name: fullName,
                email,
                phone: phone || null,
                bio: bio || null,
                department_id: departmentId || null,
                updated_at: new Date().toISOString(),
            })
            .eq("id", user.id)

        if (error) {
            console.error("Profile update error", error)
            return {
                errors: {_form: ["Failed to update profile."]},
                message: "An error occurred while updating your profile."
            }
        }

        // revalidate the profile setting
        revalidatePath("/dashboard/settings")

        return {
            success: true,
            message: "Profile successfully updated"
        }

    } catch (error) {
        console.error("Update profile settings error:", error)
        return {
            errors: { _form: ["An unexpected error occurred"] },
            message: "Failed to update profile settings.",
        }
    }
}


export async function updateUserPreferencesAction(
    prevState: UserPreferencesState,
    formData: FormData,
): Promise<UserPreferencesState> {
    const userPreferencesData = {
        theme: formData.get("theme"),
        language: formData.get("language"),
        timezone: formData.get("timezone"),
        emailNotifications: formData.get("emailNotifications") === "on",
        pushNotifications: formData.get("pushNotifications") === "on",
        ticketUpdates: formData.get("ticketUpdates") === "on",
        weeklyReports: formData.get("weeklyReports") === "on",
    }

    try {
        const validatedFields = UserPreferencesSchema.safeParse(userPreferencesData)

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid form data.",
            }
        }

        const { theme, language, timezone, emailNotifications, pushNotifications, ticketUpdates, weeklyReports } =
            validatedFields.data
        const supabase = await cookiesClient()

        // Get current user
        const {
            data: { user },
            error: userError,
        } = await supabase.auth.getUser()
        if (userError || !user) {
            return {
                errors: { _form: ["Authentication required"] },
                message: "Please log in to update your preferences.",
            }
        }

        // Upsert user settings
        const { error } = await supabase.from("user_settings").upsert({
            user_id: user.id,
            theme,
            language,
            timezone,
            email_notifications: emailNotifications,
            push_notifications: pushNotifications,
            ticket_updates: ticketUpdates,
            weekly_reports: weeklyReports,
            updated_at: new Date().toISOString(),
        })

        if (error) {
            console.error("User preferences update error:", error)
            return {
                errors: { _form: ["Failed to update preferences"] },
                message: "An error occurred while updating your preferences.",
            }
        }

        revalidatePath("/dashboard/settings")

        return {
            success: true,
            message: "Preferences updated successfully!",
        }
    } catch (error) {
        console.error("Update user preferences error:", error)
        return {
            errors: { _form: ["An unexpected error occurred"] },
            message: "Failed to update user preferences.",
        }
    }
}


export async function updateOrganizationSettingsAction(
    prevState: OrganizationSettingsState,
    formData: FormData,
): Promise<OrganizationSettingsState> {
    const organizationSettingsData = {
        organizationName: formData.get("organizationName"),
        website: formData.get("website"),
        industry: formData.get("industry"),
    }

    try {
        const validatedFields = OrganizationSettingsSchema.safeParse(organizationSettingsData)

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid form data.",
            }
        }

        const { organizationName, website, industry } = validatedFields.data
        const supabase = await cookiesClient()

        // Get current user and their organization
        const {
            data: { user },
            error: userError,
        } = await supabase.auth.getUser()
        if (userError || !user) {
            return {
                errors: { _form: ["Authentication required"] },
                message: "Please log in to update organization settings.",
            }
        }

        // Get user's organization ID
        const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("org_id, role")
            .eq("id", user.id)
            .single()

        if (profileError || !profile) {
            return {
                errors: { _form: ["Profile not found"] },
                message: "Unable to find your profile.",
            }
        }

        // Check if user has admin permissions
        if (profile.role !== "admin") {
            return {
                errors: { _form: ["Insufficient permissions"] },
                message: "Only administrators can update organization settings.",
            }
        }

        // Update organization
        const { error } = await supabase
            .from("organizations")
            .update({
                name: organizationName,
                website: website || null,
                industry: industry || null,
                updated_at: new Date().toISOString(),
            })
            .eq("id", profile.org_id)

        if (error) {
            console.error("Organization update error:", error)
            return {
                errors: { _form: ["Failed to update organization"] },
                message: "An error occurred while updating organization settings.",
            }
        }

        revalidatePath("/dashboard/settings")

        return {
            success: true,
            message: "Organization settings updated successfully!",
        }
    } catch (error) {
        console.error("Update organization settings error:", error)
        return {
            errors: { _form: ["An unexpected error occurred"] },
            message: "Failed to update organization settings.",
        }
    }
}

export async function updateOrgSettingsAction(
    prevState: OrgSettingsState,
    formData: FormData,
): Promise<OrgSettingsState> {
    const orgSettingsData = {
        ticketPrefix: formData.get("ticketPrefix"),
        slaHours: formData.get("slaHours"),
        autoAssign: formData.get("autoAssign") === "on",
        requireCategory: formData.get("requireCategory") === "on",
        requirePriority: formData.get("requirePriority") === "on",
        businessHoursStart: formData.get("businessHoursStart"),
        businessHoursEnd: formData.get("businessHoursEnd"),
    }

    try {
        const validatedFields = OrgSettingsSchema.safeParse(orgSettingsData)

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid form data.",
            }
        }

        const {
            ticketPrefix,
            slaHours,
            autoAssign,
            requireCategory,
            requirePriority,
            businessHoursStart,
            businessHoursEnd,
        } = validatedFields.data
        const supabase = await cookiesClient()

        // Get current user and their organization
        const {
            data: { user },
            error: userError,
        } = await supabase.auth.getUser()
        if (userError || !user) {
            return {
                errors: { _form: ["Authentication required"] },
                message: "Please log in to update system settings.",
            }
        }

        // Get user's organization ID and check permissions
        const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("org_id, role")
            .eq("id", user.id)
            .single()

        if (profileError || !profile) {
            return {
                errors: { _form: ["Profile not found"] },
                message: "Unable to find your profile.",
            }
        }

        // Check if user has admin permissions
        if (profile.role !== "admin") {
            return {
                errors: { _form: ["Insufficient permissions"] },
                message: "Only administrators can update system settings.",
            }
        }

        // Upsert organization settings
        const { error } = await supabase.from("org_settings").upsert({
            org_id: profile.org_id,
            ticket_prefix: ticketPrefix,
            sla_hours: slaHours,
            auto_assign: autoAssign,
            require_category: requireCategory,
            require_priority: requirePriority,
            business_hours_start: businessHoursStart,
            business_hours_end: businessHoursEnd,
            updated_at: new Date().toISOString(),
        })

        if (error) {
            console.error("Org settings update error:", error)
            return {
                errors: { _form: ["Failed to update system settings"] },
                message: "An error occurred while updating system settings.",
            }
        }

        revalidatePath("/dashboard/settings")

        return {
            success: true,
            message: "System settings updated successfully!",
        }
    } catch (error) {
        console.error("Update org settings error:", error)
        return {
            errors: { _form: ["An unexpected error occurred"] },
            message: "Failed to update system settings.",
        }
    }
}

export async function updateSecuritySettingsAction(
    prevState: SecuritySettingsState,
    formData: FormData,
): Promise<SecuritySettingsState> {
    const securitySettingsData = {
        currentPassword: formData.get("currentPassword"),
        newPassword: formData.get("newPassword"),
        confirmPassword: formData.get("confirmPassword"),
    }

    try {
        const validatedFields = SecuritySettingsSchema.safeParse(securitySettingsData)

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid form data.",
            }
        }

        const { currentPassword, newPassword } = validatedFields.data
        const supabase = await cookiesClient()

        // Get current user
        const {
            data: { user },
            error: userError,
        } = await supabase.auth.getUser()
        if (userError || !user) {
            return {
                errors: { _form: ["Authentication required"] },
                message: "Please log in to update your password.",
            }
        }

        // Verify current password by attempting to sign in
        const { error: signInError } = await supabase.auth.signInWithPassword({
            email: user.email!,
            password: currentPassword,
        })

        if (signInError) {
            return {
                errors: { currentPassword: ["Current password is incorrect"] },
                message: "Current password verification failed.",
            }
        }

        // Update password
        const { error: updateError } = await supabase.auth.updateUser({
            password: newPassword,
        })

        if (updateError) {
            console.error("Password update error:", updateError)
            return {
                errors: { _form: ["Failed to update password"] },
                message: "An error occurred while updating your password.",
            }
        }

        revalidatePath("/dashboard/settings")

        return {
            success: true,
            message: "Password updated successfully!",
        }
    } catch (error) {
        console.error("Update security settings error:", error)
        return {
            errors: { _form: ["An unexpected error occurred"] },
            message: "Failed to update security settings.",
        }
    }
}
