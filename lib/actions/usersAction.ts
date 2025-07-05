"use server"

import {InviteUserSchema} from "@/schemas/usersSchema";
import {InviteUserState} from "@/utils/types";


export async function inviteUserAction(prevState: InviteUserState, formData: FormData): Promise<InviteUserState> {
    const userInviteFormData = {
        email: formData.get("email"),
        fullName: formData.get("fullName"),
        role: formData.get("role"),
        department: formData.get("department"),
    }

    try {
        // Validate form data
        const validatedFields = InviteUserSchema.safeParse(userInviteFormData);

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid form data.",
            }
        }

        const { email, fullName, role, department } = validatedFields.data

        /**
         *  supabase logic goes here
         *  DO SOMETHING WITH SUPABASE
         * */

        return {
            success: true,
            message: `Invitation sent to ${email} successfully!`,
        }
    } catch (error) {
        console.error("Invite user error:", error)
        return {
            errors: {
                _form: ["An unexpected error occurred. Please try again."],
            },
            message: "Failed to send invitation.",
        }
    }
}
