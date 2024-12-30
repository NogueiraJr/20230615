import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const itemTypesData = [
  { id: 'product', name: 'Produto', description: 'Tipo Produto oferecido' },
  { id: 'service', name: 'Serviço', description: 'Tipo Serviço oferecido' },
];

async function main() {
  for (const itemTypeData of itemTypesData) {
    await prisma.itemTypes.create({
      data: itemTypeData,
    });
  }
  console.log('itemTypesSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
