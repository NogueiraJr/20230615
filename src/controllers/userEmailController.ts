import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

export const prisma = new PrismaClient();

interface UserPayload {
  user: any;
  email: any;
}

import { createUserEmail } from '../services/user/createUserEmail';

export const createUserEmailHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { email, user } = request.body as UserPayload; 
    const ret = await createUserEmail(email, user);
    reply.send(ret);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Erro ao criar email do usuário.' });
  }
};

