import { prisma } from '../_prismaClient';
import { ProductPayload } from '../interface/ProductPayload';

import { FastifyRequest } from 'fastify';

export async function _createProduct(request: FastifyRequest) {
  const { id, name, description, productTypeId, price, tags, userId, systemId } = request.body as ProductPayload;
  try {
    let product = await prisma.products.create({
      data: {
        id,
        name,
        description,
        productTypeId,
        price,
        tags,
        userId,
        systemId,
      },
    });

    return product;

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
  
}
