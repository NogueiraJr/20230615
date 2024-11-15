import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

import { errorHandler } from '../errors/errorHandler';
import { createOperation } from '../business/operation/createOperation';
import { getOperation } from '../business/operation/getOperation';
import { IGetOperationBody } from '../interfaces/request/IGetOperationBody';

export const prisma = new PrismaClient();

export const createOperationHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const ret = await createOperation(request);
    reply.send(ret);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};

export const getOperationHandler = async (request: FastifyRequest<{ Body: IGetOperationBody }>, reply: FastifyReply) => {
  try {
    const operation = await getOperation(request, reply);
    reply.status(200).send(operation);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
