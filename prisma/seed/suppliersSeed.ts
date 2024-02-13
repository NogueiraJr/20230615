import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const suppliersData = [
  { id: 'sup01', name: 'Fornecedor 01' },
  { id: 'sup02', name: 'Fornecedor 02' },
  { id: 'sup03', name: 'Fornecedor 03' },
  { id: 'sup04', name: 'Fornecedor 04' },
  { id: 'sup05', name: 'Fornecedor 05' },
  { id: 'sup06', name: 'Fornecedor 06' },
  { id: 'sup07', name: 'Fornecedor 07' },
  { id: 'sup08', name: 'Fornecedor 08' },
  { id: 'sup09', name: 'Fornecedor 09' },
  { id: 'sup10', name: 'Fornecedor 10' },
  { id: 'sup11', name: 'Fornecedor 11' },
  { id: 'sup12', name: 'Fornecedor 12' },
  { id: 'sup13', name: 'Fornecedor 13' },
  { id: 'sup14', name: 'Fornecedor 14' },
  { id: 'sup15', name: 'Fornecedor 15' },
  { id: 'sup16', name: 'Fornecedor 16' },
  { id: 'sup17', name: 'Fornecedor 17' },
  { id: 'sup18', name: 'Fornecedor 18' },
  { id: 'sup19', name: 'Fornecedor 19' },
  { id: 'sup20', name: 'Fornecedor 20' },
  { id: 'sup21', name: 'Fornecedor 21' },
  { id: 'sup22', name: 'Fornecedor 22' },
  { id: 'sup23', name: 'Fornecedor 23' },
  { id: 'sup24', name: 'Fornecedor 24' },
  { id: 'sup25', name: 'Fornecedor 25' },
  { id: 'sup26', name: 'Fornecedor 26' },
  { id: 'sup27', name: 'Fornecedor 27' },
  { id: 'sup28', name: 'Fornecedor 28' },
  { id: 'sup29', name: 'Fornecedor 29' },
  { id: 'sup30', name: 'Fornecedor 30' },
];

async function main() {
  for (const supplierData of suppliersData) {
    await prisma.suppliers.create({
      data: supplierData,
    });
  }
  console.log('suppliersSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
