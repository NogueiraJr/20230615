import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const userIdToInclude = ['idAdmin000', 'idSupport001', 'idSupport002', 'idSupport003'];

async function main() {
  const users = await prisma.users.findMany({
    where: {
      id: {
        in: userIdToInclude,
      },
    },
  });
  const systemMenuModules = await prisma.systemMenuModule.findMany();

  const userSystemsMenusModules = [];

  for (const user of users) {
    for (const module of systemMenuModules) {
      userSystemsMenusModules.push({
        user_id: user.id,
        SystemMenuModule_id: module.id,
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
