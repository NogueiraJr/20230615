import { prisma } from '../../controllers/userController';

export async function updateUser(id: string, userTypeId: string, name: string) {
  return await prisma.users.update({
    where: { id },
    data: { userTypeId, name },
    include: {
      emails: true,
      phones: true,
      userSystemMenuModule: true,
      userType: true,
    },
  });
}
