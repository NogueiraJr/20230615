import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const partnersData = [
  { id: 'par01', name: 'Parceiro 01' },
  { id: 'par02', name: 'Parceiro 02' },
  { id: 'par03', name: 'Parceiro 03' },
  { id: 'par04', name: 'Parceiro 04' },
  { id: 'par05', name: 'Parceiro 05' },
  { id: 'par06', name: 'Parceiro 06' },
  { id: 'par07', name: 'Parceiro 07' },
  { id: 'par08', name: 'Parceiro 08' },
  { id: 'par09', name: 'Parceiro 09' },
  { id: 'par10', name: 'Parceiro 10' },
  { id: 'par11', name: 'Parceiro 11' },
  { id: 'par12', name: 'Parceiro 12' },
  { id: 'par13', name: 'Parceiro 13' },
  { id: 'par14', name: 'Parceiro 14' },
  { id: 'par15', name: 'Parceiro 15' },
  { id: 'par16', name: 'Parceiro 16' },
  { id: 'par17', name: 'Parceiro 17' },
  { id: 'par18', name: 'Parceiro 18' },
  { id: 'par19', name: 'Parceiro 19' },
  { id: 'par20', name: 'Parceiro 20' },
  { id: 'par21', name: 'Parceiro 21' },
  { id: 'par22', name: 'Parceiro 22' },
  { id: 'par23', name: 'Parceiro 23' },
  { id: 'par24', name: 'Parceiro 24' },
  { id: 'par25', name: 'Parceiro 25' },
  { id: 'par26', name: 'Parceiro 26' },
  { id: 'par27', name: 'Parceiro 27' },
  { id: 'par28', name: 'Parceiro 28' },
  { id: 'par29', name: 'Parceiro 29' },
  { id: 'par30', name: 'Parceiro 30' },
];

async function main() {
  for (const partnerData of partnersData) {
    await prisma.partners.create({
      data: partnerData,
    });
  }
  console.log('partnersSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
