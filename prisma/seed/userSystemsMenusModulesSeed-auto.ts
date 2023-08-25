import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const userTypeIdToInclude = ['admin', 'support'];

async function main() {
  const users = await prisma.users.findMany({
    where: {
      userTypeId: {
        in: userTypeIdToInclude,
      },
    },
  });
  const systemMenuModules = await prisma.systemMenuModule.findMany();

  const userSystemsMenusModules = [];

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
