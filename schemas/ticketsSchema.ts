import {z} from "zod";

const CreateTicketSchema = z.object({
    title: z.string().min(1, "Title is required").max(200, "Title too long"),
    description: z.string().min(1, "Description is required"),
    priority: z.string().min(1, "Priority is required"),
    category: z.string().min(1, "Category is required"),
    assignee: z.string().optional(),
})

// Ticket comment schema
const CreateCommentSchema = z.object({
    ticketId: z.string().min(1, "Ticket ID is required"),
    content: z.string().min(1, "Comment content is required"),
})

export {
    CreateCommentSchema,
    CreateTicketSchema
}
