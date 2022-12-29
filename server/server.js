import fastify from 'fastify';
import sensible from '@fastify/sensible';
import cors from '@fastify/cors';
import dotenv from 'dotenv'; 
import {PrismaClient} from '@prisma/client';


// execute dotenv config to have access to env variables
dotenv.config();

// and initialize fastify and PrismaClient and sensible
const app = fastify();
app.register(sensible);
app.register(cors, {
  origin: process.env.CLIENT_URL,
  credentials: true
});
const prisma = new PrismaClient();

// send a get request to '/post' and return id, title for each post
app.get('/posts', async (req, res) => {
  return await prisma.post.findMany({
    select: {
      id: true,
      title: true,
    },
  });
});


const port = process.env.PORT || '3001'

// listen to a port 
app.listen({port: process.env.PORT ?? '3001'});
// app.listen({port:port});
