import { prisma } from '../_prismaClient';
import { ActionPayload } from '../interface/ActionPayload';

import { FastifyRequest } from 'fastify';

export async function _createAction(request: FastifyRequest) {
  const { userOperationId, userClientId, actionId, description, notes, scheduledAt, executedAt, finishedAt, priceItems, tags } = request.body as ActionPayload;
  try {
    let userAction = await prisma.userActions.create({
      data: {
        userOperationId
        , userClientId
        , actionId
        , description
        , notes
        , scheduledAt
        , executedAt
        , finishedAt
        , priceItems
        , tags
      },
    });

    return userAction;

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
  
}
