import { prisma } from '../_prismaClient';

export async function _getUserClientId(userId?: string, clientId?: string) {
  try {
    const whereClause: any = {};
    
    if (userId) whereClause.userId = userId;
    if (clientId) whereClause.clientId = clientId;
    
    return await prisma.userClients.findFirst({
      where: whereClause,
      select: { id: true },
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
