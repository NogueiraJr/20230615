// prisma/seed/userTypesSeed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const usersData_client = [
  {
    name: 'John Doe',
    emails: {
      create: [{ email: 'john.doe@example.com', userEmailTypeId: 'personal' }]
    },
    phones: { create: [{ phoneNumber: '+1234567890' }, { phoneNumber: '+9876543210' }] }
  },
  {
    name: 'Jane Smith',
    emails: {
      create: [{ email: 'jane.smith@example.com', userEmailTypeId: 'others' }]
    },
    phones: { create: [{ phoneNumber: '+1111111111' }] }
  },
];

const usersData_user = [
  {
    name: 'John Doe',
    emails: {
      create: [{ email: 'john.doe@example.com', userEmailTypeId: 'work' }]
    },
    phones: { create: [{ phoneNumber: '+5555555555' }] }
  },
  {
    name: 'Jane Smith',
    emails: {
      create: [{ email: 'jane.smith@example.com', userEmailTypeId: 'personal' }]
    },
    phones: { create: [{ phoneNumber: '+9999999999' }, { phoneNumber: '+8888888888' }] }
  },
];

async function main() {
  for (const item of usersData_client) {
    await prisma.users.create({
      data: {
        ...item,
        userType: { connect: { id: 'client' } },
      },
    });
  }
  for (const item of usersData_user) {
    await prisma.users.create({
      data: {
        ...item,
        userType: { connect: { id: 'user' } },
      },
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
