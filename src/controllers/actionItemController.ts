import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

import { errorHandler } from '../errors/errorHandler';
import { createActionProduct } from '../business/actionItems/createActionItem';

export const prisma = new PrismaClient();

export const createActionProductHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const ret = await createActionProduct(request);
    reply.send(ret);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
