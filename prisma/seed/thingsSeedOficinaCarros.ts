import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedThingsOficinaCarros() {
  console.log('Iniciando o seed para Oficina de Carros...');

  const system = await prisma.systems.findFirst({ where: { name: { contains: 'Oficina de Carros' } } });

  if (!system) {
    console.error('Sistema "Oficina de Carros" não encontrado.');
    return;
  }

  console.log('Sistema encontrado:', system);

  // Create a Things record
  const thing = await prisma.things.create({
    data: {
      systemId: system.id,
      name: 'DadosVeiculo',
      description: 'Informações sobre o veículo para reparo',
      displayName: 'Veículo',
    },
  });

  console.log('Registro criado na tabela Things:', thing);

  // Create Marca records and store their IDs
  const marcas = [
    { seq: '001', name: 'Toyota', displayName: 'Toyota' },
    { seq: '002', name: 'Ford', displayName: 'Ford' },
    { seq: '003', name: 'Chevrolet', displayName: 'Chevrolet' },
    { seq: '004', name: 'Honda', displayName: 'Honda' },
  ];

  try {
    const marcaRecords = await Promise.all(
      marcas.map((marca) => {
        console.log('Criando Marca:', marca);
        return prisma.thingFields.create({
          data: {
            seq: marca.seq,
            name: marca.name,
            displayName: marca.displayName,
            dataType: 'combobox',
            isRequired: true,
            ThingId: thing.id,
          },
        });
      })
    );

    console.log('Marcas criadas:', marcaRecords);

    // Map Marca names to their IDs
    const marcaIdMap = Object.fromEntries(
      marcaRecords.map((record, index) => [marcas[index].name, record.id])
    );

    console.log('Mapa de IDs das Marcas:', marcaIdMap);

    // Create Modelo records linked to Marca IDs
    const modelos = [
      { seq: '001', name: 'Corolla', displayName: 'Corolla', parentMarca: 'Toyota' },
      { seq: '002', name: 'Camry', displayName: 'Camry', parentMarca: 'Toyota' },
      { seq: '003', name: 'F-150', displayName: 'F-150', parentMarca: 'Ford' },
      { seq: '004', name: 'Civic', displayName: 'Civic', parentMarca: 'Honda' },
    ];

    const modeloRecords = await Promise.all(
      modelos.map((modelo) => {
        console.log('Criando Modelo:', modelo);
        return prisma.thingFields.create({
          data: {
            seq: modelo.seq,
            name: modelo.name,
            displayName: modelo.displayName,
            dataType: 'combobox',
            isRequired: true,
            ThingId: thing.id,
            parentFieldId: marcaIdMap[modelo.parentMarca],
          },
        });
      })
    );

    console.log('Modelos criados:', modeloRecords);
  } catch (error) {
    console.error('Erro ao criar Marcas ou Modelos:', error);
  }

  console.log('Seed concluído para Oficina de Carros.');
}

seedThingsOficinaCarros()
  .catch((e) => console.error('Erro ao executar o seed:', e))
  .finally(async () => {
    await prisma.$disconnect();
  });
