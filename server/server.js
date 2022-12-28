import fastify from 'fastify';
import sensible from '@fastify/sensible';
import dotenv from 'dotenv';

import {PrismaClient} from '@prisma/client';

dotenv.config();

const app = fastify();

// to use sensible
app.register(sensible);

const prisma = new PrismaClient();

app.get('/posts', async (req, res) => {
  // inside in findMany() that going to get all of the different thing,
  return await dbErrorHandler(
    prisma.post.findMany({
      select: {
        id: true,
        title: true,
      },
    })
  );
});

// error handler
async function dbErrorHandler(promise) {
  // return an error if exist and the data
  const [error, data] = await app.to(promise);

  if (error) return app.httpErrors.internalServerError(error.message); // 500 error

  return data;
}

app.listen({port: process.env.PORT});
