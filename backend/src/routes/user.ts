import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { setCookie, getCookie } from "hono/cookie";
import bcrypt from "bcryptjs";
import { prismaType } from "..";
import { authSchema } from "../validators/authValidators";

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        prisma: prismaType
    }
}>();

userRouter.post('/signup', zValidator('json', authSchema), async (c) => {
    const prisma = c.get("prisma");
    const { name, email, password } = c.req.valid('json');

    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (existingUser) return c.json({ message: "User already exists" }, 409);

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
        data: { name, email, password: hashedPassword }
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    setCookie(c, "token", token, {
        httpOnly: true,
        secure: false, // Requires HTTPS (disable this if testing on local http:// localhost)
        sameSite: "Strict",
        maxAge: 60 * 60 * 24
    });

    return c.json({ message: "You are signed up successfully" }, 200);
});

userRouter.post('/signin', zValidator('json', authSchema.omit({ name: true })), async (c) => {
    const prisma = c.get("prisma");
    const { email, password } = c.req.valid('json');

    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) return c.json({ message: "User doesn't exist" }, 403);

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) return c.json({ message: "Incorrect Password" }, 403);

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    setCookie(c, "token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 60 * 60 * 24
    });

    return c.json({ message: "You are signed in successfully" }, 200);
});

userRouter.get('/profile', async (c) => {
    const prisma = c.get("prisma");

    const token = getCookie(c, "token");

    if (!token) {
        return c.json({ message: "Unauthorized: No token provided" }, 401);
    }

    try {
        const decoded = await verify(token, c.env.JWT_SECRET, "HS256");
        if (!decoded || !decoded.id) {
            return c.json({ message: "Unauthorized: Invalid token payload" }, 401);
        }

        const user = await prisma.user.findUnique({
            where: { id: `${decoded.id}` },
            select: { id: true, email: true }
        });

        return c.json({ user });

    } catch (error) {
        return c.json({ message: "Unauthorized: Invalid token" }, 401);
    }
});

export default userRouter;