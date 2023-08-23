import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface UserModuleSystemMenuMapping {
  user_id: string;
  moduleSystemMenu_id: string;
}

const userAdminMappings: UserModuleSystemMenuMapping[] = [
  // ... your existing mappings here
];

async function main() {
  const users = await prisma.users.findMany();

  for (const user of users) {
    for (const mapping of userAdminMappings) {
      await prisma.userModuleSystemMenu.create({
        data: {
          user: { connect: { id: user.id } },
          moduleSystemMenu: { connect: { id: mapping.moduleSystemMenu_id } }
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
