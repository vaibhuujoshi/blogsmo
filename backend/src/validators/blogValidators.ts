import { z } from "zod";

export const createBlogSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    content: z.string().min(1, { message: "Content is required" }),
    thumbnailUrl: z.string().url({ message: "Invalid thumbnail URL" })
        .optional()
        .or(z.literal(""))
        .transform(val => val === "" ? undefined : val),
    tag: z.string().nullable().optional()
});

export const updateBlogSchema = z.object({
    id: z.string().uuid({ message: "Invalid post ID format" }),
    title: z.string().min(1, { message: "Title cannot be empty" }).optional(),
    content: z.string().min(1, { message: "Content cannot be empty" }).optional(),
    published: z.boolean().optional(),
    thumbnailUrl: z.string().url({ message: "Invalid thumbnail URL" })
        .optional()
        .or(z.literal(""))
        .transform(val => val === "" ? undefined : val),
    tag: z.string().nullable().optional()
});