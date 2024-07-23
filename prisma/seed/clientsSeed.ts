import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const clientsData = [
  { /*id: 'cli01',*/ name: 'Ana Silva' },
  { /*id: 'cli02',*/ name: 'Bruno Costa' },
  { /*id: 'cli03',*/ name: 'Carla Oliveira' },
  { /*id: 'cli04',*/ name: 'Daniel Santos' },
  { /*id: 'cli05',*/ name: 'Elisa Pereira' },
  { /*id: 'cli06',*/ name: 'Felipe Almeida' },
  { /*id: 'cli07',*/ name: 'Gabriela Rodrigues' },
  { /*id: 'cli08',*/ name: 'Henrique Ferreira' },
  { /*id: 'cli09',*/ name: 'Isabela Martins' },
  { /*id: 'cli10',*/ name: 'João Souza' },
  { /*id: 'cli11',*/ name: 'Karen Lima' },
  { /*id: 'cli12',*/ name: 'Lucas Fernandes' },
  { /*id: 'cli13',*/ name: 'Mariana Rocha' },
  { /*id: 'cli14',*/ name: 'Nelson Carvalho' },
  { /*id: 'cli15',*/ name: 'Olivia Mendes' },
  { /*id: 'cli16',*/ name: 'Pedro Azevedo' },
  { /*id: 'cli17',*/ name: 'Quezia Monteiro' },
  { /*id: 'cli18',*/ name: 'Rafael Ribeiro' },
  { /*id: 'cli19',*/ name: 'Sofia Nogueira' },
  { /*id: 'cli20',*/ name: 'Thiago Barros' },
  { /*id: 'cli21',*/ name: 'Ursula Machado' },
  { /*id: 'cli22',*/ name: 'Victor Dias' },
  { /*id: 'cli23',*/ name: 'Yasmin Castro' },
  { /*id: 'cli24',*/ name: 'William Teixeira' },
  { /*id: 'cli25',*/ name: 'Camila Moreira' },
  { /*id: 'cli26',*/ name: 'Igor Duarte' },
  { /*id: 'cli27',*/ name: 'Renata Almeida' },
  { /*id: 'cli28',*/ name: 'Otávio Pires' },
  { /*id: 'cli29',*/ name: 'Vanessa Lopes' },
  { /*id: 'cli30',*/ name: 'Leonardo Gomes' },
];

async function main() {
  for (const clientData of clientsData) {
    await prisma.clients.create({
      data: clientData,
    });
  }
  console.log('clientsSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
