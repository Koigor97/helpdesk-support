import { z } from "zod";


/**
 * Schema for validating the login form payload.
 *
 * Ensures:
 * - `email` is a non-empty, valid email address, max 100 chars.
 * - `password` is at least 8 chars and max 100 chars.
 */
export const loginSchema = z.object({
  email: z.string().email("Invalid email address")
    .min(1, { message: "Email is required" })
    .max(100,  { message: "Email must be less than 20 characters" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" })
    .max(100, { message: "Password must be less than 100 characters" }),
});
