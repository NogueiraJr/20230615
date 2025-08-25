import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedThingsOficinaCarros() {
  console.log('Iniciando o seed para Oficina de Carros...');

  const systems = await prisma.systems.findMany({ 
    where: {
      OR: [
        { name: { contains: 'Oficina de Carros', mode: 'insensitive' } },
        { name: { contains: 'Locação de Carros', mode: 'insensitive' } }
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
      name: 'DadosVeiculo',
      description: 'Informações sobre o veículo para reparo',
      displayName: 'Veículo',
    },
  });

  console.log('Registro criado na tabela Things:', thing);

  for (const sistema of systems) {
    await prisma.thingSystems.create({
      data: {
        thingId: thing.id,
        systemId: sistema.id,
      },
    });
    console.log(`Associação criada entre Things e sistema: ${sistema.name}`);
  }

  console.log('Associação criada entre Things e sistema: Oficina de Carros');

  // Cria os campos e opções
  const marcaField = await prisma.thingFields.create({
    data: {
      seq: '001',
      name: 'Marca',
      displayName: 'Marca',
      dataType: 'combobox',
      isRequired: true,
      thingId: thing.id,
    },
  });

  console.log('Marca ThingField criado:', marcaField);

  const marcas = [
    { seq: '001', value: 'Toyota', label: 'Toyota' },
    { seq: '002', value: 'Ford', label: 'Ford' },
    { seq: '003', value: 'Chevrolet', label: 'Chevrolet' },
    { seq: '004', value: 'Honda', label: 'Honda' },
  ];

  const marcaOptions = await Promise.all(
    marcas.map((marca) => {
      return prisma.thingFieldOptions.create({
        data: {
          seq: marca.seq,
          value: marca.value,
          label: marca.label,
          thingFieldId: marcaField.id,
        },
      });
    })
  );

  console.log('Marca options criadas:', marcaOptions);

  const modeloField = await prisma.thingFields.create({
    data: {
      seq: '002',
      name: 'Modelo',
      displayName: 'Modelo',
      dataType: 'combobox',
      isRequired: true,
      thingId: thing.id,
      thingFieldId: marcaField.id,
    },
  });

  console.log('Modelo ThingField criado:', modeloField);

  const modelos = [
    { seq: '001', value: 'Corolla', label: 'Corolla', parentValue: 'Toyota' },
    { seq: '002', value: 'Camry', label: 'Camry', parentValue: 'Toyota' },
    { seq: '003', value: 'F-150', label: 'F-150', parentValue: 'Ford' },
    { seq: '004', value: 'Civic', label: 'Civic', parentValue: 'Honda' },
  ];

  await Promise.all(
    modelos.map((modelo) => {
      const parentOption = marcaOptions.find((marca) => marca.value === modelo.parentValue);
      return prisma.thingFieldOptions.create({
        data: {
          seq: modelo.seq,
          value: modelo.value,
          label: modelo.label,
          thingFieldId: modeloField.id,
          thingFieldOptionId: parentOption?.id,
        },
      });
    })
  );

  console.log('Modelo options criadas.');

  await prisma.thingFields.createMany({
    data: [
      { seq: '003', name: 'Placa', displayName: 'Placa', dataType: 'string', isRequired: true, validationRules: '{"regex":"^[A-Z]{3}-\\d{4}$"}', thingId: thing.id },
      { seq: '004', name: 'Chassi', displayName: 'Chassi', dataType: 'string', isRequired: true, validationRules: '{"regex":"^[A-HJ-NPR-Z0-9]{17}$"}', thingId: thing.id },
      { seq: '005', name: 'Cor', displayName: 'Cor', dataType: 'string', isRequired: true, thingId: thing.id },
    ],
  });

  console.log('Campos adicionais criados para Oficina de Carros.');
}

seedThingsOficinaCarros()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
