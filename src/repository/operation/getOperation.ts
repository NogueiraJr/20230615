import { prisma } from '../_prismaClient';

export async function _getOperation(id?: string, userId?: string, systemId?: string) {
  try {
    const whereClause: any = {};
    
    if (id) whereClause.id = id;
    if (userId) whereClause.userId = userId;
    if (systemId) whereClause.systemId = systemId;
    
    return await prisma.userOperations.findMany({
      where: whereClause,
      select: { id: true, userId: true, systemId: true, active: true
        , description: true, notes: true, priceActions: true, priceCharged: true, tags: true },
    });

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
