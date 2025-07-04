import {z} from "zod";

const ProfileSettingsSchema = z.object({
    fullName: z.string().min(1, "Full name is required").max(255, "Name too long"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    bio: z.string().optional(),
    departmentId: z.string().optional(),
})

const UserPreferencesSchema = z.object({
    theme: z.enum(["light", "dark", "system"]),
    language: z.string().min(2, "Language is required"),
    timezone: z.string().min(1, "Timezone is required"),
    emailNotifications: z.boolean(),
    pushNotifications: z.boolean(),
    ticketUpdates: z.boolean(),
    weeklyReports: z.boolean(),
})

const OrganizationSettingsSchema = z.object({
    organizationName: z.string().min(1, "Organization name is required").max(255, "Name too long"),
    website: z.string().url("Invalid website URL").optional().or(z.literal("")),
    industry: z.string().optional(),
})

const OrgSettingsSchema = z.object({
    ticketPrefix: z.string().min(1, "Ticket prefix is required").max(10, "Prefix too long"),
    slaHours: z.coerce.number().min(1, "SLA hours must be at least 1").max(168, "SLA hours cannot exceed 168"),
    autoAssign: z.boolean(),
    requireCategory: z.boolean(),
    requirePriority: z.boolean(),
    businessHoursStart: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
    businessHoursEnd: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
})

const SecuritySettingsSchema = z
    .object({
        currentPassword: z.string().min(1, "Current password is required"),
        newPassword: z.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    })
