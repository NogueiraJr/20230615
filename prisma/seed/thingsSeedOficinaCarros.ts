import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedThingsOficinaCarros() {
  const system = await prisma.systems.findFirst({ where: { name: { contains: 'Oficina de Carros' } } });

  if (!system) {
    console.error('Sistema "Oficina de Carros" não encontrado.');
    return;
  }

  const things = await prisma.things.create({
    data: {
      systemId: system.id,
      name: 'Dados do Veículo',
      description: 'Informações sobre o veículo para reparo',
      displayName: 'Veículo',
      ThingFields: {
        create: [
          { seq: '001', name: 'Placa', displayName: 'Placa', dataType: 'string', isRequired: true },
          { seq: '002', name: 'Modelo', displayName: 'Modelo', dataType: 'string', isRequired: true },
          { seq: '003', name: 'Ano', displayName: 'Ano', dataType: 'number', isRequired: true },
          { seq: '004', name: 'Chassi', displayName: 'Chassi', dataType: 'string', isRequired: false },
          { seq: '005', name: 'Cor', displayName: 'Cor', dataType: 'string', isRequired: false },
        ],
      },
    },
  });

  console.log('Seed concluído para Oficina de Carros:', things);
}

seedThingsOficinaCarros()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
