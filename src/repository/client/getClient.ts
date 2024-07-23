import { prisma } from '../_prismaClient';

export async function _getClientByName(name: string) {
  try {
    return await prisma.clients.findFirst({
        where: {
            AND: [
              { name: name },
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
