import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productTypesData = [
  { id: 'product', name: 'Produto', description: 'Tipo Produto oferecido' },
  { id: 'service', name: 'Serviço', description: 'Tipo Serviço oferecido' },
];

async function main() {
  for (const productTypeData of productTypesData) {
    await prisma.productTypes.create({
      data: productTypeData,
    });
  }
  console.log('productTypesSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
