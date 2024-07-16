import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

import { errorHandler } from '../errors/errorHandler';
import { createAction } from '../services/action/createOperation';

export const prisma = new PrismaClient();

export const createActionHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const ret = await createAction(request);
    reply.send(ret);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
