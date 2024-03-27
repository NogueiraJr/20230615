import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productsData = [
  { name: 'Roupa 01',   description: 'Descrição da Roupa   01', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Roupa 02',   description: 'Descrição da Roupa   02', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Roupa 03',   description: 'Descrição da Roupa   03', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Revisão 01', description: 'Descrição da Revisão 01', productType_id: 'service', user_id: 'idProprietario01', system_id: 'sysOficinaCarros' },
  { name: 'Revisão 02', description: 'Descrição da Revisão 02', productType_id: 'service', user_id: 'idProprietario01', system_id: 'sysOficinaCarros' },
  { name: 'Revisão 03', description: 'Descrição da Revisão 03', productType_id: 'service', user_id: 'idProprietario01', system_id: 'sysOficinaCarros' },
];

async function main() {
  for (const productData of productsData) {
    await prisma.products.create({
      data: productData,
    });
  }
  console.log('productsSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
