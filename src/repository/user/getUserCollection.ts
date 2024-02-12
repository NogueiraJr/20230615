import { prisma } from '../_prismaClient';

export async function _getUserCollection(id: string) {
  let collectionUsers: any[] = [];

  async function findCollectionUsers(userId: string, isMainUser: boolean) {
    const user = await prisma.users.findUnique({
      where: { id: userId },
      include: {
        emails: true,
        phones: true,
        userSystemMenuModule: true,
        userType: true,
      },
    });

    if (isMainUser) {
      collectionUsers.push(user);
    }

    const users = await prisma.users.findMany({
      where: { userId },
      include: {
        emails: true,
        phones: true,
        userSystemMenuModule: true,
        userType: true,
      },
    });

    for (const subUser of users) {
      collectionUsers.push(subUser);
      await findCollectionUsers(subUser.id, false);
    }
  }

  try {
    await findCollectionUsers(id, true);
    return collectionUsers;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
