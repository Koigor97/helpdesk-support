import {z} from "zod";

const EditUserSchema = z.object({
    fullName: z.string().min(1, "Full name is required").max(255, "Name too long"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    role: z.enum(["admin", "manager", "agent", "supervisor"]),
    department: z.string().optional(),
    bio: z.string().optional(),
})

const DeactivateUserSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
})

const SendMessageSchema = z.object({
    recipientId: z.string().min(1, "Recipient is required"),
    subject: z.string().min(1, "Subject is required").max(255, "Subject too long"),
    content: z.string().min(1, "Message content is required"),
})
