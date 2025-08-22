import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedThingsPetShop() {
  console.log('Iniciando o seed para PetShop...');

  const system = await prisma.systems.findFirst({ where: { name: { contains: 'PetShop' } } });

  if (!system) {
    console.error('Sistema "PetShop" não encontrado.');
    return;
  }

  console.log('Sistema encontrado:', system);

  // Create a Things record
  const thing = await prisma.things.create({
    data: {
      systemId: system.id,
      name: 'DadosPet',
      description: 'Informações sobre o pet para serviços de banho e tosa',
      displayName: 'Pet',
    },
  });

  console.log('Registro criado na tabela Things:', thing);

  // Create Espécie records and store their IDs
  const especies = [
    { seq: '001', name: 'Cachorro', displayName: 'Cachorro' },
    { seq: '002', name: 'Gato', displayName: 'Gato' },
    { seq: '003', name: 'Passaro', displayName: 'Pássaro' },
    { seq: '004', name: 'Peixe', displayName: 'Peixe' },
  ];

  const racas = [
    { seq: '001', name: 'Labrador', displayName: 'Labrador', parentEspecie: 'Cachorro' },
    { seq: '002', name: 'GoldenRetriever', displayName: 'Golden Retriever', parentEspecie: 'Cachorro' },
    { seq: '003', name: 'Bulldog', displayName: 'Bulldog', parentEspecie: 'Cachorro' },
    { seq: '004', name: 'Persa', displayName: 'Persa', parentEspecie: 'Gato' },
    { seq: '005', name: 'Siames', displayName: 'Siamês', parentEspecie: 'Gato' },
    { seq: '006', name: 'MaineCoon', displayName: 'Maine Coon', parentEspecie: 'Gato' },
    { seq: '007', name: 'Calopsita', displayName: 'Calopsita', parentEspecie: 'Passaro' },
    { seq: '008', name: 'Canario', displayName: 'Canário', parentEspecie: 'Passaro' },
    { seq: '009', name: 'Papagaio', displayName: 'Papagaio', parentEspecie: 'Passaro' },
    { seq: '010', name: 'Betta', displayName: 'Betta', parentEspecie: 'Peixe' },
    { seq: '011', name: 'Carpa', displayName: 'Carpa', parentEspecie: 'Peixe' },
    { seq: '012', name: 'Tetra', displayName: 'Tetra', parentEspecie: 'Peixe' },
  ];

  try {
    const especieRecords = await Promise.all(
      especies.map((especie) => {
        console.log('Criando Espécie:', especie);
        return prisma.thingFields.create({
          data: {
            seq: especie.seq,
            name: especie.name,
            displayName: especie.displayName,
            dataType: 'combobox',
            isRequired: true,
            ThingId: thing.id,
          },
        });
      })
    );

    console.log('Espécies criadas:', especieRecords);

    // Map Espécie names to their IDs
    const especieIdMap = Object.fromEntries(
      especieRecords.map((record, index) => [especies[index].name, record.id])
    );

    console.log('Mapa de IDs das Espécies:', especieIdMap);

    // Create Raça records linked to Espécie IDs
    const racaRecords = await Promise.all(
      racas.map((raca) => {
        console.log('Criando Raça:', raca);
        return prisma.thingFields.create({
          data: {
            seq: raca.seq,
            name: raca.name,
            displayName: raca.displayName,
            dataType: 'combobox',
            isRequired: false,
            ThingId: thing.id,
            parentFieldId: especieIdMap[raca.parentEspecie],
          },
        });
      })
    );

    console.log('Raças criadas:', racaRecords);
  } catch (error) {
    console.error('Erro ao criar Espécies ou Raças:', error);
  }

  console.log('Seed concluído para PetShop.');
}

seedThingsPetShop()
  .catch((e) => console.error('Erro ao executar o seed:', e))
  .finally(async () => {
    await prisma.$disconnect();
  });
