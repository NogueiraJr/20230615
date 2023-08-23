import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface UserSystemMenuModuleMapping {
  user_id: string;
  SystemMenuModule_id: string;
}

const userAdminMappings: UserSystemMenuModuleMapping[] = [
  // ... your existing mappings here
];

async function main() {
  const users = await prisma.users.findMany();

  for (const user of users) {
    for (const mapping of userAdminMappings) {
      await prisma.userSystemMenuModule.create({
        data: {
          user: { connect: { id: user.id } },
          SystemMenuModule: { connect: { id: mapping.SystemMenuModule_id } }
        }
      });
    }
  }

  console.log('userModulesSystemsMenusSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
