import { prisma } from '../../controllers/userController';

export async function createUserEmail(email: any, user: any) {
  try {
    return await prisma.userEmails.create({
      data: {
        email: email.email,
        userId: user.id,
        userEmailTypeId: email.userEmailTypeId,
        active: email.active,
        // createAt: email.createAt,
      },
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
