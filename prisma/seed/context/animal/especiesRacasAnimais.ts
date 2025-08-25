import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedEspecieRaca() {
  console.log('Iniciando o seed para EspeciesRacasAnimais...');

  const systems = await prisma.systems.findMany({
    where: {
      OR: [
        { name: { contains: 'Clínica Veterinária', mode: 'insensitive' } },
        { name: { contains: 'PetShop', mode: 'insensitive' } }
      ]
    },
  });

  if (!systems) {
    console.error('Nenhum Sistema encontrado.');
    return;
  }

  const thing = await prisma.things.create({
    data: {
      name: 'EspecieRaca',
      description: 'Informações sobre o pet para serviços de banho, tosa e clínica veterinária',
      displayName: 'Pet',
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

  const especieField = await prisma.thingFields.create({
    data: {
      seq: '001',
      name: 'Especie',
      displayName: 'Espécie',
      dataType: 'combobox',
      isRequired: true,
      thingId: thing.id,
    },
  });

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

  const racaField = await prisma.thingFields.create({
    data: {
      seq: '002',
      name: 'Raca',
      displayName: 'Raça',
      dataType: 'combobox',
      isRequired: false,
      thingId: thing.id,
    },
  });

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

  await Promise.all(
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

  console.log('Seed concluído para EspecieRaca.');
}

seedEspecieRaca()
  .catch((e) => console.error('Erro ao executar o seed:', e))
  .finally(async () => {
    await prisma.$disconnect();
  });
