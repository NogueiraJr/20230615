import { prisma } from '../../controllers/userController';

export async function createUserEmail(email: any, user: any) {
  return await prisma.userEmails.create({
    data: {
      email: email.email,
      userId: user.id,
      userEmailTypeId: email.userEmailTypeId,
      active: email.active,
      createAt: email.createAt,
    },
  });
}
