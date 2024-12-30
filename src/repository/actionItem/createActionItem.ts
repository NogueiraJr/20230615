import { prisma } from '../_prismaClient';
import { ActionItemPayload } from '../interface/ActionItemPayload';

import { FastifyRequest } from 'fastify';

export async function _createActionItem(request: FastifyRequest) {
  const { itemId, userActionId, seq, description, tags } = request.body as ActionItemPayload;
  try {
    let userActionItem = await prisma.userActionItems.create({
      data: {
        itemId
        , userActionId
        , seq
        , description
        , tags

      },
    });

    return userActionItem;

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
  
}
