import { Hono } from 'hono'
import userRouter from './routes/user';
import blogRouter from './routes/blog';
import { getPrismaClient } from './prisma';

type Env = {
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
  Variables: {
    prisma: prismaType
  }
}

export type prismaType = ReturnType<typeof getPrismaClient>;

const app = new Hono<Env>();

app.use('*', async (c, next) => {
  const prismaInstance = getPrismaClient(c.env.DATABASE_URL)

  c.set('prisma', prismaInstance);
  await next()
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/v1/blog', blogRouter);
app.route('/api/v1/user', userRouter);

export default app