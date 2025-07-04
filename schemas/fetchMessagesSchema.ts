import {z} from "zod";

const messageSchema = z.object({
    id: z.string(),
    senderId: z.string(),
    recipientId: z.string(),
    subject: z.string(),
    content: z.string(),
    createdAt: z.string(),
    isRead: z.boolean(),
    attachments: z
        .array(
            z.object({
                id: z.string(),
                name: z.string(),
                url: z.string(),
            }),
        )
        .optional(),
})

const fetchMessagesSchema = z.object({
    messages: z.array(messageSchema),
    totalCount: z.number(),
    currentPage: z.number(),
})

export type Message = z.infer<typeof messageSchema>
