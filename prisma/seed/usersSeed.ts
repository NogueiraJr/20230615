// prisma/seed/userTypesSeed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const usersData_client = [
  { name: 'John Doe', emails: { create: [{ address: 'john.doe@example.com' }] } }, 
  { name: 'Jane Smith', emails: { create: [{ address: 'jane.smith@example.com' }] } }, 
];

const usersData_user = [
  { name: 'John Doe', emails: { create: [{ address: 'john.doe@example.com' }] } }, 
  { name: 'Jane Smith', emails: { create: [{ address: 'jane.smith@example.com' }] } }, 
];

async function main() {
  for (const item of usersData_client) {
    await prisma.users.create({ data: { ...item, userType: { connect: { type: 'client' }, }, },
    });
  }
  for (const item of usersData_user) {
    await prisma.users.create({ data: { ...item, userType: { connect: { type: 'user' }, }, },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
