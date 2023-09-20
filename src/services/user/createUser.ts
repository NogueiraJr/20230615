import { prisma } from '../../controllers/userController';

export async function createUser(userTypeId: string, name: string) {
  return await prisma.users.create({
    data: {
      userTypeId,
      name,
    },
    include: {
      emails: true,
      phones: true,
      userSystemMenuModule: true,
      userType: true,
    },
  });
}
