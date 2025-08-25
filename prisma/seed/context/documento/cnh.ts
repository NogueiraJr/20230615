import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedThingsLocacaoCarros() {
    const systems = await prisma.systems.findMany({ 
    where: {
      OR: [
        { name: { contains: 'Oficina Carros', mode: 'insensitive' } },
        { name: { contains: 'Locaçao Carros', mode: 'insensitive' } }
      ]
    },
  });

  if (!systems) {
    console.error('Nenhum Sistema encontrado.');
    return;
  }

  console.log('Sistemas encontrados:', systems);

  // Cria o registro Things
  const thing = await prisma.things.create({
    data: {
      name: 'DocCNH',
      description: 'Dados do CNH',
      displayName: 'CNH',
    },
  });

  for (const sistema of systems) {
    await prisma.thingSystems.create({
      data: {
        thingId: thing.id,
        systemId: sistema.id,
      },
    });
    console.log(`Associação criada entre Things e sistema: ${sistema.name}`);
  }

  // Cria os campos e opções
  await prisma.thingFields.createMany({
    data: [
      { seq: '001', name: 'NumeroCNH', displayName: 'Número da CNH', dataType: 'string', isRequired: true, thingId: thing.id },
      { seq: '002', name: 'ValidadeCNH', displayName: 'Validade da CNH', dataType: 'date', isRequired: true, thingId: thing.id },
      { seq: '003', name: 'CategoriaCNH', displayName: 'Categoria da CNH', dataType: 'string', isRequired: true, thingId: thing.id },
    ],
  });

  console.log('Campos criados para Locação de Carros.');
}

seedThingsLocacaoCarros()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
