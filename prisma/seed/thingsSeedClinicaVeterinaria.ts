import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedThingsClinicaVeterinaria() {
  console.log('Iniciando o seed para Clínica Veterinária...');

  const system = await prisma.systems.findFirst({ where: { name: { contains: 'Clínica Veterinária' } } });

  if (!system) {
    console.error('Sistema "Clínica Veterinária" não encontrado.');
    return;
  }

  console.log('Sistema encontrado:', system);

  // Create a Things record
  const thing = await prisma.things.create({
    data: {
      systemId: system.id,
      name: 'DadosPet',
      description: 'Informações sobre o pet para serviços de Clínica Veterinária',
      displayName: 'Pet',
    },
  });

  console.log('Registro criado na tabela Things:', thing);

  // Create Especie ThingField
  const especieField = await prisma.thingFields.create({
    data: {
      seq: '001',
      name: 'Especie',
      displayName: 'Espécie',
      dataType: 'combobox',
      isRequired: true,
      ThingId: thing.id,
    },
  });

  console.log('Especie ThingField criado:', especieField);

  // Create Especie options
  const especies = [
    { seq: '001', value: 'Passaro', label: 'Pássaro' },
    { seq: '002', value: 'Gato', label: 'Gato' },
    { seq: '003', value: 'Cachorro', label: 'Cachorro' },
    { seq: '004', value: 'Peixe', label: 'Peixe' },
  ];

  const especieOptions = await Promise.all(
    especies.map((especie) => {
      return prisma.thingFieldOptions.create({
        data: {
          seq: especie.seq,
          value: especie.value,
          label: especie.label,
          thingFieldId: especieField.id,
        },
      });
    })
  );

  console.log('Especie options criadas:', especieOptions);

  // Create Raca ThingField
  const racaField = await prisma.thingFields.create({
    data: {
      seq: '002',
      name: 'Raca',
      displayName: 'Raça',
      dataType: 'combobox',
      isRequired: false,
      ThingId: thing.id,
    },
  });

  console.log('Raca ThingField criado:', racaField);

  // Create Raca options
  const racas = [
    { seq: '001', value: 'Labrador', label: 'Labrador', parentValue: 'Cachorro' },
    { seq: '002', value: 'Persa', label: 'Persa', parentValue: 'Gato' },
    { seq: '003', value: 'MaineCoon', label: 'Maine Coon', parentValue: 'Gato' },
    { seq: '004', value: 'GoldenRetriever', label: 'Golden Retriever', parentValue: 'Cachorro' },
    { seq: '005', value: 'Carpa', label: 'Carpa', parentValue: 'Peixe' },
    { seq: '006', value: 'Siames', label: 'Siamês', parentValue: 'Gato' },
    { seq: '007', value: 'Tetra', label: 'Tetra', parentValue: 'Peixe' },
    { seq: '008', value: 'Bulldog', label: 'Bulldog', parentValue: 'Cachorro' },
    { seq: '009', value: 'Betta', label: 'Betta', parentValue: 'Peixe' },
    { seq: '010', value: 'Canario', label: 'Canário', parentValue: 'Passaro' },
    { seq: '011', value: 'Calopsita', label: 'Calopsita', parentValue: 'Passaro' },
    { seq: '012', value: 'Papagaio', label: 'Papagaio', parentValue: 'Passaro' },
  ];

  const racaOptions = await Promise.all(
    racas.map((raca) => {
      const parentOption = especieOptions.find((especie) => especie.value === raca.parentValue);
      return prisma.thingFieldOptions.create({
        data: {
          seq: raca.seq,
          value: raca.value,
          label: raca.label,
          thingFieldId: racaField.id,
          thingFieldOptionId: parentOption?.id,
        },
      });
    })
  );

  console.log('Raca options criadas:', racaOptions);

  console.log('Seed concluído para ClinicaVeterinaria.');
}

seedThingsClinicaVeterinaria()
  .catch((e) => console.error('Erro ao executar o seed:', e))
  .finally(async () => {
    await prisma.$disconnect();
  });
