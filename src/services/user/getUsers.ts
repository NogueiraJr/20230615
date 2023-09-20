import { prisma } from '../../controllers/userController';

export async function getUsers() {
  return await prisma.users.findMany({
    include: {
      emails: true,
      phones: true,
      userSystemMenuModule: true,
      userType: true,
    },
  });
}
