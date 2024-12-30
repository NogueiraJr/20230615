import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

import { errorHandler } from '../errors/errorHandler';
import { createActionItem } from '../business/actionItems/createActionItem';

export const prisma = new PrismaClient();

export const createActionItemHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const ret = await createActionItem(request);
    reply.send(ret);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
