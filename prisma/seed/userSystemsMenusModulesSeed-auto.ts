import { PrismaClient, Users, SystemMenuModule } from '@prisma/client';

const prisma = new PrismaClient();
const userTypeIdToInclude: string[] = ['admin', 'support'];

async function main() {
  const users: Users[] = await prisma.users.findMany({
    where: {
      userTypeId: {
        in: userTypeIdToInclude,
      },
    },
  });
  const systemMenuModules: SystemMenuModule[] = await prisma.systemMenuModule.findMany();

  const userSystemsMenusModules: { userId: string; systemMenuModuleId: string }[] = [];

  for (const user of users) {
    for (const module of systemMenuModules) {
      userSystemsMenusModules.push({
        userId: user.id,
        systemMenuModuleId: module.id,
      });
    }
  }

  await prisma.userSystemMenuModule.createMany({
    data: userSystemsMenusModules,
    skipDuplicates: true,
  });

  console.log('userSystemsMenusModulesSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
