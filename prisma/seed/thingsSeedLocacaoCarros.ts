import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedThingsLocacaoCarros() {
  console.log('Iniciando o seed para Locação de Carros...');

  const system = await prisma.systems.findFirst({ where: { name: { contains: 'Locação de Carros' } } });

  if (!system) {
    console.error('Sistema "Locação de Carros" não encontrado.');
    return;
  }

  console.log('Sistema encontrado:', system);

  // Cria o registro Things
  const thing = await prisma.things.create({
    data: {
      name: 'DocCNH',
      description: 'Dados de CNH e preferências para locação de carros',
      displayName: 'CNH e Preferências',
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

  console.log('Associação criada entre Things e sistema: Locação de Carros');

  // Cria os campos e opções
  await prisma.thingFields.createMany({
    data: [
      { seq: '001', name: 'NumeroCNH', displayName: 'Número da CNH', dataType: 'string', isRequired: true, thingId: thing.id },
      { seq: '002', name: 'ValidadeCNH', displayName: 'Validade da CNH', dataType: 'date', isRequired: true, thingId: thing.id },
      { seq: '003', name: 'CategoriaCNH', displayName: 'Categoria da CNH', dataType: 'string', isRequired: true, thingId: thing.id },
      { seq: '004', name: 'TipoCarro', displayName: 'Tipo de Carro', dataType: 'string', isRequired: false, thingId: thing.id },
      { seq: '005', name: 'GPS', displayName: 'GPS', dataType: 'boolean', isRequired: false, thingId: thing.id },
      { seq: '006', name: 'Cadeirinha', displayName: 'Cadeirinha', dataType: 'boolean', isRequired: false, thingId: thing.id },
    ],
  });

  console.log('Campos criados para Locação de Carros.');
}

seedThingsLocacaoCarros()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
