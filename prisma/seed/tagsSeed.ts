import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tagsData = [
  // Locação de Roupas
  { tag: 'casamento', description: 'Roupa para casamento', user_id: 'idProprietario01' },
  { tag: 'batizado', description: 'Roupa para batizado', user_id: 'idProprietario01' },
  { tag: 'festa', description: 'Roupa para festa', user_id: 'idProprietario01' },
  { tag: 'social', description: 'Roupa para eventos sociais', user_id: 'idProprietario01' },

  // Oficina Mecânica
  { tag: 'passante', description: 'Cliente não fidelizado que passou na Oficina aleatoriamente para resolver um problema em seu carro', user_id: 'idProprietario02' },
  { tag: 'critico', description: 'Serviço Crítico', user_id: 'idProprietario02' },
  { tag: 'rotina', description: 'Serviço de Rotina', user_id: 'idProprietario02' },
  { tag: 'garantia', description: 'Serviço de Garantia', user_id: 'idProprietario02' },

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
