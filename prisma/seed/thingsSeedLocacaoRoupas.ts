import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedThingsLocacaoRoupas() {
  const system = await prisma.systems.findFirst({ where: { name: { contains: 'Locação de Roupas' } } });

  if (!system) {
    console.error('Sistema "Locação de Roupas" não encontrado.');
    return;
  }

  const things = await prisma.things.create({
    data: {
      systemId: system.id,
      name: 'MedidasCorporais',
      description: 'Medidas corporais para locação de roupas',
      displayName: 'Medidas',
      ThingFields: {
        create: [
          { seq: '001', name: 'Altura', displayName: 'Altura', dataType: 'number', isRequired: true },
          { seq: '002', name: 'Busto', displayName: 'Busto', dataType: 'number', isRequired: true },
          { seq: '003', name: 'Cintura', displayName: 'Cintura', dataType: 'number', isRequired: true },
          { seq: '004', name: 'Quadril', displayName: 'Quadril', dataType: 'number', isRequired: true },
        ],
      },
    },
  });

  console.log('Seed concluído para Locação de Roupas:', things);
}

seedThingsLocacaoRoupas()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
