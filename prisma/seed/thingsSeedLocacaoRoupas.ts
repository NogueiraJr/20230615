import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedThingsLocacaoRoupas() {
  console.log('Iniciando o seed para Locação de Roupas...');

  const system = await prisma.systems.findFirst({ where: { name: { contains: 'Locação de Roupas' } } });

  if (!system) {
    console.error('Sistema "Locação de Roupas" não encontrado.');
    return;
  }

  console.log('Sistema encontrado:', system);

  // Cria o registro Things
  const thing = await prisma.things.create({
    data: {
      name: 'MedidasCorporais',
      description: 'Medidas corporais para locação de roupas',
      displayName: 'Medidas',
    },
  });

  console.log('Registro criado na tabela Things:', thing);

  // Associa o Things ao sistema via ThingSystems
  await prisma.thingSystems.create({
    data: {
      thingId: thing.id,
      systemId: system.id,
    },
  });

  console.log('Associação criada entre Things e sistema: Locação de Roupas');

  // Cria os campos
  await prisma.thingFields.createMany({
    data: [
      { seq: '001', name: 'Altura', displayName: 'Altura', dataType: 'number', isRequired: true, thingId: thing.id },
      { seq: '002', name: 'Busto', displayName: 'Busto', dataType: 'number', isRequired: true, thingId: thing.id },
      { seq: '003', name: 'Cintura', displayName: 'Cintura', dataType: 'number', isRequired: true, thingId: thing.id },
      { seq: '004', name: 'Quadril', displayName: 'Quadril', dataType: 'number', isRequired: true, thingId: thing.id },
    ],
  });

  console.log('Campos criados para Locação de Roupas.');
}

seedThingsLocacaoRoupas()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
