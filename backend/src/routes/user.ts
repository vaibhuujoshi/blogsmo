import { Hono } from "hono";
import { getPrismaClient } from "../prisma";
import { sign } from "hono/jwt";


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

export default userRouter;