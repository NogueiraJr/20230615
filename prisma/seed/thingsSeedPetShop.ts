import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedThingsPetShop() {
  const system = await prisma.systems.findFirst({ where: { name: { contains: 'PetShop' } } });

  if (!system) {
    console.error('Sistema "PetShop" não encontrado.');
    return;
  }

  const things = await prisma.things.create({
    data: {
      systemId: system.id,
      name: 'Dados do Pet',
      description: 'Informações sobre o pet para serviços de banho e tosa',
      displayName: 'Pet',
      ThingFields: {
        create: [
          { seq: '001', name: 'Nome', displayName: 'Nome', dataType: 'string', isRequired: true },
          { seq: '002', name: 'Espécie', displayName: 'Espécie', dataType: 'string', isRequired: true },
          { seq: '003', name: 'Raça', displayName: 'Raça', dataType: 'string', isRequired: false },
          { seq: '004', name: 'Idade', displayName: 'Idade', dataType: 'number', isRequired: false },
          { seq: '005', name: 'Peso', displayName: 'Peso', dataType: 'number', isRequired: false },
        ],
      },
    },
  });

  console.log('Seed concluído para PetShop:', things);
}

seedThingsPetShop()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
