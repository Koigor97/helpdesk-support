import {z} from "zod";

const EditTicketSchema = z.object({
    title: z.string().min(1, "Title is required").max(500, "Title too long"),
    description: z.string().min(1, "Description is required"),
    status: z.enum(["open", "in_progress", "pending", "resolved", "closed"]),
    priority: z.string().min(1, "Priority is required"),
    category: z.string().min(1, "Category is required"),
    assignedTo: z.string().optional(),
    tags: z.array(z.string()).optional(),
})

const AssignTicketSchema = z.object({
    ticketId: z.string().min(1, "Ticket ID is required"),
    assignedTo: z.string().min(1, "Assignee is required"),
})

const DeleteTicketSchema = z.object({
    ticketId: z.string().min(1, "Ticket ID is required"),
})
