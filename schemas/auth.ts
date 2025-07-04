import { z } from "zod";


/**
 * Schema for validating the login form payload.
 *
 * Ensures:
 * - `email` is a non-empty, valid email address, max 100 chars.
 * - `password` is at least 8 chars and max 100 chars.
 */
export const LoginFormSchema = z.object({
  email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Please enter a email address")
      .trim()
      .toLowerCase(),
  password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .trim()
});

export const MagicLinkSchema = z.object({
  email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Please enter a valid email address")
      .trim()
      .toLowerCase(),
})

export const VerifyOTPSchema = z.object({
  otpCode: z
      .string()
      .min(6, {message: "Verification code must be 6 digits"})
      .max(6, {message: "Verification code must be 6 digits"})
      .regex(/^\d{6}$/, {message: "Verification code must contain only numbers"})
      .trim(),
  email: z.string().email({message: "Invalid email address"}).optional(),
})

export const ResendOTPSchema = z.object({
  email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Please enter a valid email address")
      .trim()
      .toLowerCase()
})

export type LoginFormData = z.infer<typeof LoginFormSchema>;
export type MagicLinkData = z.infer<typeof MagicLinkSchema>
export type VerifyOTPData = z.infer<typeof VerifyOTPSchema>;
export type ResendOTPData = z.infer<typeof ResendOTPSchema>;

export type LoginState = {
  errors?: {
    email?: string[]
    password?: string[]
    _form?: string[]
  }
  message?: string
  success?: boolean
  redirectTo?: string
}

export type VerifyOTPState = {
  errors?: {
    otpCode?: string[]
    email?: string[]
    _form?: string[]
  }
  message?: string
  success?: boolean
  email?: string
}

export type ResendOTPState = {
  errors?: {
    email?: string[]
    _form?: string[]
  }
  message?: string
  success?: boolean
}
