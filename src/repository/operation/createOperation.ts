import { prisma } from '../_prismaClient';
import { OperationPayload } from '../interface/OperationPayload';

import { FastifyRequest } from 'fastify';

export async function _createOperation(request: FastifyRequest) {
  const { description, notes, priceActions, priceCharged, userId, system_id, tags } = request.body as OperationPayload;
  try {
    let userOperation = await prisma.userOperations.create({
      data: {
        description,
        notes,
        priceActions,
        priceCharged,
        userId,
        system_id,
        tags
      },
    });

    return userOperation;

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
  
}
