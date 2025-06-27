import {z} from "zod";


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

export const verifyotp = z.object({
  otp: z.number().min(6, {message: "Otp must be 6 digits"}).max(6, {message: "Otp must be 6 digits"}),
})

export const stepOneSchema = z.object({
  organizationName: z.string().min(1, "Organization name is required"),
  slug: z
      .string()
      .min(1, "Slug is required")
      .regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
  timezone: z.string().min(1, "Timezone is required"),
  logo: z.string().optional(),
  departments: z
      .array(
          z.object({
            id: z.string(),
            name: z.string().min(1, "Department name is required"),
            description: z.string().optional(),
          }),
      )
      .min(1, "At least one department is required"),
})

export const stepTwoSchema = z.object({
  priorities: z
      .array(
          z.object({
            id: z.string(),
            name: z.string().min(1, "Priority name is required"),
            level: z.string().min(1, "Priority level is required"),
            color: z.string().min(1, "Priority color is required"),
          }),
      )
      .min(1, "At least one priority is required"),
  categories: z
      .array(
          z.object({
            id: z.string(),
            name: z.string().min(1, "Category name is required"),
            color: z.string().min(1, "Category color is required"),
          }),
      )
      .min(1, "At least one category is required"),
  slaResponseTime: z.string().min(1, "Response time is required").regex(/^\d+$/, "Must be a valid number"),
  slaResolutionTime: z.string().min(1, "Resolution time is required").regex(/^\d+$/, "Must be a valid number"),
  knowledgeBase: z.boolean(),
  internalMessaging: z.boolean(),
})

export type StepOneData = z.infer<typeof stepOneSchema>
export type StepTwoData = z.infer<typeof stepTwoSchema>
