"use server"

import {CreateTicketSchema} from "@/schemas/ticketsSchema";
import {CreateTicketState} from "@/utils/types";


export async function createTicketAction(prevState: CreateTicketState, formData: FormData): Promise<CreateTicketState> {
    const ticketFormData = {
        title: formData.get("title"),
        description: formData.get("description"),
        priority: formData.get("priority"),
        category: formData.get("category"),
        assignee: formData.get("assignee"),
    }

    try {
        // Validate form data
        const validatedFields = CreateTicketSchema.safeParse(ticketFormData)

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: "Invalid form data.",
            }
        }

        const { title, description, priority, category, assignee } = validatedFields.data


        /**
         *  supabase CRUD logic goes here
         *  DO SOMETHING WITH SUPABASE
         * */


        // Mock successful creation
        const mockTicketId = `ticket_${Date.now()}`

        return {
            success: true,
            message: "Ticket created successfully!",
            ticketId: mockTicketId,
        }
    } catch (error) {
        console.error("Create ticket error:", error)
        return {
            errors: {
                _form: ["An unexpected error occurred. Please try again."],
            },
            message: "Failed to create ticket.",
        }
    }
}
