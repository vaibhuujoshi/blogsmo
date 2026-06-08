import { Hono } from "hono";
import { verify } from "hono/jwt";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { getCookie } from "hono/cookie";
import { prismaType } from "..";

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string,
        prisma: prismaType
    }
}>();

const createBlogSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    content: z.string().min(1, { message: "Content is required" }),
    thumbnailUrl: z.string().url({ message: "Invalid thumbnail URL" })
        .optional()
        .or(z.literal(""))
        .transform(val => val === "" ? undefined : val),
    tag: z.string().nullable().optional()
});

const updateBlogSchema = z.object({
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

const paramSchema = z.object({
    id: z.string().uuid({ message: "Invalid post ID parameter format" })
});

blogRouter.use('/*', async (c, next) => {
    const token = getCookie(c, "token");

    if (!token) {
        return c.json({ error: 'Unauthorized: No token provided' }, 401);
    }

    try {
        const decoded = await verify(token, c.env.JWT_SECRET, "HS256");

        if (!decoded || !decoded.id) {
            return c.json({ error: "Unauthorized: Invalid token payload" }, 401);
        }

        c.set('userId', String(decoded.id));
        await next();
    } catch (e) {
        return c.json({ error: "Unauthorized: Invalid or expired token" }, 401);
    }
});

blogRouter.post('/', zValidator('json', createBlogSchema), async (c) => {
    const prisma = c.get("prisma");
    const { title, content, thumbnailUrl, tag } = c.req.valid('json');
    const userId = c.get('userId');

    try {
        const blog = await prisma.post.create({
            data: {
                title,
                content,
                authorId: userId,
                thumbnailUrl,
                tag
            }
        });

        return c.json({
            message: "Blog created successfully",
            id: blog.id
        }, 201);

    } catch (error) {
        return c.json({ error: "Failed to create blog post" }, 500);
    }
});

blogRouter.put('/', zValidator('json', updateBlogSchema), async (c) => {
    const prisma = c.get("prisma");
    const { id, title, content, published, thumbnailUrl, tag } = c.req.valid('json');
    const userId = c.get('userId');

    try {
        await prisma.post.update({
            where: {
                id: id,
                authorId: userId
            },
            data: {
                title,
                content,
                published,
                thumbnailUrl,
                tag
            }
        });

        return c.json({
            message: "Blog updated successfully",
            id: id
        }, 200);
    } catch (error) {
        return c.json({ error: "Failed to update blog post" }, 500);
    }
});

blogRouter.get('/bulk', async (c) => {
    const prisma = c.get("prisma");

    try {
        const blogs = await prisma.post.findMany({
            orderBy: { date: 'desc' }
        });
        return c.json({ blogs });
    } catch (error) {
        return c.json({ error: "Failed to fetch blogs" }, 500);
    }
});

blogRouter.get('/:id', zValidator('param', paramSchema), async (c) => {
    const prisma = c.get("prisma");
    const { id } = c.req.valid('param');

    try {
        const blog = await prisma.post.findFirst({ where: { id } });

        if (!blog) {
            return c.json({ error: "Blog post not found" }, 404);
        }

        return c.json({ blog });
    } catch (error) {
        return c.json({ error: "Failed to fetch blog" }, 500);
    }
});

blogRouter.delete('/:id', zValidator('param', paramSchema), async (c) => {
    const prisma = c.get("prisma");
    const { id } = c.req.valid('param');
    const userId = c.get('userId');

    try {
        const deleteOperation = await prisma.post.deleteMany({
            where: {
                id: id,
                authorId: userId
            }
        });

        if (deleteOperation.count === 0) {
            const blogExists = await prisma.post.findUnique({ where: { id } });
            if (!blogExists) return c.json({ error: "Blog post not found" }, 404);
            return c.json({ error: "You are not allowed to delete this blog" }, 403);
        }

        return c.json({
            message: `Blog deleted, id: ${id}`
        });
    } catch (error) {
        return c.json({ error: "Failed to delete blog" }, 500);
    }
});

export default blogRouter;