import {z} from "zod";

const ticketSchema = z.object({
    id: z.string(),
    title: z.string(),
    status: z.string(),
    priority: z.object({
        id: z.string(),
        name: z.string(),
        color: z.string(),
    }),
    category: z.object({
        id: z.string(),
        name: z.string(),
        color: z.string(),
    }),
    author: z.object({
        name: z.string(),
        avatar: z.string().optional(),
        email: z.string().email(),
    }),
    assignedTo: z
        .object({
            id: z.string(),
            name: z.string(),
            avatar: z.string().optional(),
        })
        .nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
    commentsCount: z.number(),
    tags: z.array(z.string()),
})

const commentSchema = z.object({
    id: z.string(),
    author: z.object({
        name: z.string(),
        avatar: z.string().optional(),
        role: z.string(),
    }),
    content: z.string(),
    isInternal: z.boolean(),
    createdAt: z.string(),
})

const attachmentSchema = z.object({
    id: z.string(),
    name: z.string(),
    size: z.number(),
    type: z.string(),
    url: z.string(),
    uploadedBy: z.object({
        name: z.string(),
    }),
    uploadedAt: z.string(),
})

const auditLogSchema = z.object({
    id: z.string(),
    user: z.object({
        name: z.string(),
    }),
    description: z.string(),
    createdAt: z.string(),
})

export const ticketDetailsSchema = z.object({
    id: z.string(),
    number: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.string(),
    priority: z.object({
        name: z.string(),
        color: z.string(),
    }),
    category: z.object({
        name: z.string(),
        color: z.string(),
    }),
    assignedTo: z
        .object({
            id: z.string(),
            name: z.string(),
            email: z.string(),
            avatar: z.string().optional(),
        })
        .nullable(),
    customer: z.object({
        name: z.string(),
        email: z.string(),
    }),
    createdAt: z.string(),
    updatedAt: z.string(),
    tags: z.array(z.string()),
    commentsCount: z.number(),
    attachmentsCount: z.number(),
    comments: z.array(commentSchema),
    attachments: z.array(attachmentSchema),
    auditLog: z.array(auditLogSchema),
})

export type TicketDetails = z.infer<typeof ticketDetailsSchema>
