import { prisma } from '../_prismaClient';

export async function _getUser(id: string) {
  try {
    return await prisma.users.findUnique({
      where: { id },
      include: {
        emails: true,
        phones: true,
        userSystemMenuModule: {
          include: {
            systemMenuModule: {
              include: {
                system: true, 
                module: true, 
                menu: true 
              }
            }
          }
        },
        userType: true,
      },
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
