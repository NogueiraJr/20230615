import { prisma } from '../_prismaClient';

export async function _getUsers() {
  try {
    return await prisma.users.findMany({
      include: {
        emails: true,
        phones: true,
        userSystemMenuModule: true,
        userType: true,
      },
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
