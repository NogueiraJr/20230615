import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

import { errorHandler } from '../errors/errorHandler';
import { createOperation } from '../business/operation/createOperation';

export const prisma = new PrismaClient();

export const createOperationHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const ret = await createOperation(request);
    reply.send(ret);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
