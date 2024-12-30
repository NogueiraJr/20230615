import { prisma } from '../_prismaClient';
import { ActionProductPayload } from '../interface/ActionItemPayload';

import { FastifyRequest } from 'fastify';

export async function _createActionProduct(request: FastifyRequest) {
  const { productId, userActionId, seq, description, tags } = request.body as ActionProductPayload;
  try {
    let userActionProduct = await prisma.userActionItems.create({
      data: {
        productId
        , userActionId
        , seq
        , description
        , tags

      },
    });

    return userActionProduct;

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
  
}
