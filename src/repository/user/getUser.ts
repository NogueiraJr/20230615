import { prisma } from '../_prismaClient';

export async function _getUser(id: string) {
  try {
    return await prisma.users.findUnique({
      where: { id },
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
