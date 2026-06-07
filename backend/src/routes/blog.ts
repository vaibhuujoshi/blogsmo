import { Hono } from "hono";
import { verify } from "hono/jwt";
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

blogRouter.use('/*', async (c, next) => {
    const jwt = c.req.header('Authorization');
    if (!jwt || !jwt.startsWith('Bearer ')) {
        return c.json({ error: 'Unauthorized: No token provided' }, 401);
    }
    const token = jwt.split(' ')[1];

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


blogRouter.post('/', async (c) => {
    const prisma = c.get("prisma");

    const { title, content } = await c.req.json();
    const userId = c.get('userId');

    try {
        const blog = await prisma.post.create({
            data: {
                title,
                content,
                authorId: userId
            }
        });

        return c.json({
            message: "Blog created successfully",
            id: blog.id
        }, 201);

    } catch (error) {
        return c.json({ error: "Failed to create blog post" }, 500);
    }
})

blogRouter.put('/', async (c) => {
    const prisma = c.get("prisma");

    const body = await c.req.json();
    const userId = c.get('userId');

    try {
        await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId
            },
            data: {
                title: body.title,
                content: body.content
            }
        });

        return c.json({
            message: "Blog updated successfully",
            id: body.id
        }, 200);
    } catch (error) {
        return c.json({ error: "Failed to create blog post" }, 500);
    }

})

blogRouter.get('/bulk', async (c) => {
    const prisma = c.get("prisma");

    try {
        const blogs = await prisma.post.findMany();
        return c.json({ blogs });
    } catch (error) {
        return c.json({ error: "Failed to fetch blogs" }, 500);
    }
})

blogRouter.get('/:id', async (c) => {
    const prisma = c.get("prisma");

    const id = c.req.param('id');

    try {
        const blog = await prisma.post.findFirst({ where: { id } });

        if (!blog) {
            return c.json({ error: "Blog post not found" }, 404);
        }

        return c.json({ blog });
    } catch (error) {
        return c.json({ error: "Failed to fetch blog" }, 500);
    }
})

blogRouter.delete('/:id', async (c) => {
    const prisma = c.get("prisma");

    const id = c.req.param('id');
    const userId = c.get('userId');

    try {
        const deleteOperation = await prisma.post.deleteMany({
            where: {
                id: id,
                authorId: userId
            }
        })

        if (deleteOperation.count === 0) {
            const blogExists = await prisma.post.findUnique({ where: { id } })
            if (!blogExists) return c.json({ error: "Blog post not found" }, 404)
            return c.json({ error: "You are not allowed to delete this blog" }, 403)
        }

        return c.json({
            message: `Blog deleted, id: ${id}`
        })
    } catch (error) {
        return c.json({ error: "Failed to fetch blog" }, 500);
    }
})

export default blogRouter;