import {z} from "zod";

const InviteUserSchema = z.object({
    email: z.string().email("Invalid email address"),
    fullName: z.string().min(1, "Full name is required").max(100, "Name too long"),
    role: z.enum(["admin", "agent", "manager"], {
        errorMap: () => ({ message: "Invalid role selected" }),
    }),
    department: z.string().min(1, "Department is required"),
})
