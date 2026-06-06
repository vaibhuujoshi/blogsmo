import { Hono } from "hono";
import { getPrismaClient } from "../prisma";
import { sign, verify } from "hono/jwt";

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
    const prisma = getPrismaClient(c.env.DATABASE_URL);
    const { email, password } = await c.req.json();

    const existingUser = await prisma.user.findFirst({
        where: { email }
    });

    if (existingUser) {
        c.status(409);
        return c.json({
            message: "User already exists"
        })
    }

    const user = await prisma.user.create({
        data: {
            email,
            password
        }
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({
        token,
        message: "You are signed up successfully"
    })

})

userRouter.post('/signin', async (c) => {
    const prisma = getPrismaClient(c.env.DATABASE_URL);
    const { email, password } = await c.req.json();

    const user = await prisma.user.findFirst({
        where: {
            email,
            password
        }
    });

    if (!user) {
        c.status(403);
        return c.json({
            message: "User doesn't exist"
        })
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({
        token,
        message: "You are signed in successfully"
    })
})

userRouter.get('/profile', async (c) => {
    const prisma = getPrismaClient(c.env.DATABASE_URL);
    const authHeader = c.req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        c.status(401);
        return c.json({
            message: "Unauthorized: No token provided"
        })
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = await verify(token, c.env.JWT_SECRET, "HS256");
        if (!decoded || !decoded.id) {
            c.status(401);
            return c.json({
                message: "Unauthorized: Invalid token payload"
            })
        }
        const user = await prisma.user.findUnique({
            where: { id: `${decoded.id}` },
            select: {
                id: true,
                email: true
            }
        });

        return c.json({
            user
        });

    } catch (error) {
        c.status(401);
        return c.json({
            message: "Unauthorized: Invalid token"
        })
    }
})

export default userRouter;