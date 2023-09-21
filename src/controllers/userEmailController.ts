import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

import { errorHandler } from '../errors/errorHandler';

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
    errorHandler(error as Error, reply);
  }
};
