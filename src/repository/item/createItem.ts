import { prisma } from '../_prismaClient';
import { ItemPayload } from '../interface/ItemPayload';

import { FastifyRequest } from 'fastify';

export async function _createItem(request: FastifyRequest) {
  const { id, name, description, itemTypeId, price, tags, userId, systemId } = request.body as ItemPayload;
  try {
    let item = await prisma.items.create({
      data: {
        id,
        name,
        description,
        itemTypeId,
        price,
        tags,
        userId,
        systemId,
      },
    });

    return item;

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
  
}
