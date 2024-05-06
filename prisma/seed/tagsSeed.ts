import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tagsData = [
  // Locação de Roupas
  { tag: 'casamento', description: 'Roupa para casamento', userId: 'idProprietario01' },
  { tag: 'batizado', description: 'Roupa para batizado', userId: 'idProprietario01' },
  { tag: 'festa', description: 'Roupa para festa', userId: 'idProprietario01' },
  { tag: 'social', description: 'Roupa para eventos sociais', userId: 'idProprietario01' },

  // Oficina Mecânica
  { tag: 'passante', description: 'Cliente não fidelizado que passou na Oficina aleatoriamente para resolver um problema em seu carro', userId: 'idProprietario02' },
  { tag: 'critico', description: 'Serviço Crítico', userId: 'idProprietario02' },
  { tag: 'rotina', description: 'Serviço de Rotina', userId: 'idProprietario02' },
  { tag: 'garantia', description: 'Serviço de Garantia', userId: 'idProprietario02' },

];

async function main() {
  for (const tagData of tagsData) {
    await prisma.userTags.create({
      data: tagData,
    });
  }
  console.log('tagsSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
