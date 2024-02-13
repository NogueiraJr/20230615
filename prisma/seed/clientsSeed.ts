import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const clientsData = [
  { id: 'cli01', name: 'Cliente 01' },
  { id: 'cli02', name: 'Cliente 02' },
  { id: 'cli03', name: 'Cliente 03' },
  { id: 'cli04', name: 'Cliente 04' },
  { id: 'cli05', name: 'Cliente 05' },
  { id: 'cli06', name: 'Cliente 06' },
  { id: 'cli07', name: 'Cliente 07' },
  { id: 'cli08', name: 'Cliente 08' },
  { id: 'cli09', name: 'Cliente 09' },
  { id: 'cli10', name: 'Cliente 10' },
  { id: 'cli11', name: 'Cliente 11' },
  { id: 'cli12', name: 'Cliente 12' },
  { id: 'cli13', name: 'Cliente 13' },
  { id: 'cli14', name: 'Cliente 14' },
  { id: 'cli15', name: 'Cliente 15' },
  { id: 'cli16', name: 'Cliente 16' },
  { id: 'cli17', name: 'Cliente 17' },
  { id: 'cli18', name: 'Cliente 18' },
  { id: 'cli19', name: 'Cliente 19' },
  { id: 'cli20', name: 'Cliente 20' },
  { id: 'cli21', name: 'Cliente 21' },
  { id: 'cli22', name: 'Cliente 22' },
  { id: 'cli23', name: 'Cliente 23' },
  { id: 'cli24', name: 'Cliente 24' },
  { id: 'cli25', name: 'Cliente 25' },
  { id: 'cli26', name: 'Cliente 26' },
  { id: 'cli27', name: 'Cliente 27' },
  { id: 'cli28', name: 'Cliente 28' },
  { id: 'cli29', name: 'Cliente 29' },
  { id: 'cli30', name: 'Cliente 30' },
];

async function main() {
  for (const clientData of clientsData) {
    await prisma.clients.create({
      data: clientData,
    });
  }
  console.log('clientsSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
