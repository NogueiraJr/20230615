import { prisma } from '../_prismaClient';

export async function _getProduct(name: string, productTypeId: string, userId: string, systemId: string) {
  try {
    return await prisma.products.findFirst({
        where: {
            AND: [
              { name: name },
              { productTypeId: productTypeId },
              { userId: userId },
              { systemId: systemId },
            ],
          },
          select: { id: true },
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
