import {z} from "zod";

const userSchema = z.object({
    id: z.string(),
    fullName: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    role: z.enum(["Admin", "Manager", "Agent"]),
    department: z.string(),
    status: z.enum(["online", "offline", "away"]),
    availability: z.enum(["available", "busy", "out_of_office"]),
    avatar: z.string().optional(),
    joinedAt: z.string(),
    lastSeen: z.string(),
    ticketsAssigned: z.number(),
    ticketsResolved: z.number(),
    bio: z.string().optional(),
})

const fetchUsersSchema = z.object({
    users: z.array(userSchema),
    totalCount: z.number(),
    currentPage: z.number(),
})

export type User = z.infer<typeof userSchema>
