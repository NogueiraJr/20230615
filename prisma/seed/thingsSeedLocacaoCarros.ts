import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedThingsLocacaoCarros() {
  const system = await prisma.systems.findFirst({ where: { name: { contains: 'Locação de Carros' } } });

  if (!system) {
    console.error('Sistema "Locação de Carros" não encontrado.');
    return;
  }

  const things = await prisma.things.create({
    data: {
      systemId: system.id,
      name: 'CNH e Preferências',
      description: 'Dados de CNH e preferências para locação de carros',
      displayName: 'CNH e Preferências',
      ThingFields: {
        create: [
          { seq: '001', name: 'Número da CNH', displayName: 'Número da CNH', dataType: 'string', isRequired: true },
          { seq: '002', name: 'Validade da CNH', displayName: 'Validade da CNH', dataType: 'date', isRequired: true },
          { seq: '003', name: 'Categoria da CNH', displayName: 'Categoria da CNH', dataType: 'string', isRequired: true },
          { seq: '004', name: 'Tipo de Carro', displayName: 'Tipo de Carro', dataType: 'string', isRequired: false },
          { seq: '005', name: 'GPS', displayName: 'GPS', dataType: 'boolean', isRequired: false },
          { seq: '006', name: 'Cadeirinha', displayName: 'Cadeirinha', dataType: 'boolean', isRequired: false },
        ],
      },
    },
  });

  console.log('Seed concluído para Locação de Carros:', things);
}

seedThingsLocacaoCarros()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
