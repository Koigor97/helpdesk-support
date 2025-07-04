import {z} from "zod";

export const SignupFormSchema = z
    .object({
        email: z
            .string()
            .min(1, { message: "Email is required." })
            .email({ message: "Please enter a valid email address." })
            .trim()
            .toLowerCase(),
        fullName: z.string().min(1, { message: "Full name is required." }).trim(),
        password: z.string().min(8, { message: "Password must be at least 8 characters long." }).trim(),
        confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long." }).trim(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    })

export type SignupFormData = z.infer<typeof SignupFormSchema>
