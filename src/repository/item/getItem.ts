import { prisma } from '../_prismaClient';

export async function _getItem(name: string, itemTypeId: string, userId: string, systemId: string) {
  try {
    return await prisma.items.findFirst({
        where: {
            AND: [
              { name: name },
              { itemTypeId: itemTypeId },
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
