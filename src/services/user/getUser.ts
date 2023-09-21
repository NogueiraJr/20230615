import { prisma } from '../../controllers/userController';

export async function getUser(id: string) {
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
