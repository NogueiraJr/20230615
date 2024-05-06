import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userOperationsData = [
  { description: 'Locação de Casamento do Fulano', notes: 'Roupas para o casamento do Fulano', priceActions: 0.00, priceCharged: 0.00, userId: 'idProprietario01', system_id: 'sysLocacaoRoupa', tags: 'casamento|festa' },
  ];

async function main() {
  for (const userOperationData of userOperationsData) {
    await prisma.userOperations.create({
      data: userOperationData,
    });
  }
  console.log('userOperationsSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
