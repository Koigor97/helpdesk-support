import {z} from "zod";

const uploadFileSchema = z.object({
    ticketId: z.string(),
    file: z.any(), // TODO: Add proper file type validation
})

const deleteFileSchema = z.object({
    fileId: z.string(),
})
