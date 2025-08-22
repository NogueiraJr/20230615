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

  // Create Marca ThingField
  const marcaField = await prisma.thingFields.create({
    data: {
      seq: '001',
      name: 'Marca',
      displayName: 'Marca',
      dataType: 'combobox',
      isRequired: true,
      ThingId: thing.id,
    },
  });

  console.log('Marca ThingField criado:', marcaField);

  // Create Marca options
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

  // Create Modelo ThingField
  const modeloField = await prisma.thingFields.create({
    data: {
      seq: '002',
      name: 'Modelo',
      displayName: 'Modelo',
      dataType: 'combobox',
      isRequired: true,
      ThingId: thing.id,
    },
  });

  console.log('Modelo ThingField criado:', modeloField);

  // Create Modelo options
  const modelos = [
    { seq: '001', value: 'Corolla', label: 'Corolla', parentValue: 'Toyota' },
    { seq: '002', value: 'Camry', label: 'Camry', parentValue: 'Toyota' },
    { seq: '003', value: 'F-150', label: 'F-150', parentValue: 'Ford' },
    { seq: '004', value: 'Civic', label: 'Civic', parentValue: 'Honda' },
  ];

  const modeloOptions = await Promise.all(
    modelos.map((modelo) => {
      const parentOption = marcaOptions.find((marca) => marca.value === modelo.parentValue);
      return prisma.thingFieldOptions.create({
        data: {
          seq: modelo.seq,
          value: modelo.value,
          label: modelo.label,
          thingFieldId: modeloField.id,
        },
      });
    })
  );

  console.log('Modelo options criadas:', modeloOptions);

  // Create Placa ThingField
  const placaField = await prisma.thingFields.create({
    data: {
      seq: '003',
      name: 'Placa',
      displayName: 'Placa',
      dataType: 'string',
      isRequired: true,
      validationRules: '{"regex":"^[A-Z]{3}-\\d{4}$"}',
      ThingId: thing.id,
    },
  });

  console.log('Placa ThingField criado:', placaField);

  // Create Chassi ThingField
  const chassiField = await prisma.thingFields.create({
    data: {
      seq: '004',
      name: 'Chassi',
      displayName: 'Chassi',
      dataType: 'string',
      isRequired: true,
      validationRules: '{"regex":"^[A-HJ-NPR-Z0-9]{17}$"}',
      ThingId: thing.id,
    },
  });

  console.log('Chassi ThingField criado:', chassiField);

  // Create Cor ThingField
  const corField = await prisma.thingFields.create({
    data: {
      seq: '005',
      name: 'Cor',
      displayName: 'Cor',
      dataType: 'string',
      isRequired: true,
      ThingId: thing.id,
    },
  });

  console.log('Cor ThingField criado:', corField);

  console.log('Seed concluído para Oficina de Carros.');
}

seedThingsOficinaCarros()
  .catch((e) => console.error('Erro ao executar o seed:', e))
  .finally(async () => {
    await prisma.$disconnect();
  });
