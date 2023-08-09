// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedPhoneTypes() {
  try {
    // Inserindo tipos de phones
    await prisma.userPhoneTypes.createMany({
      data: [
        { id: 'personal', name: 'Pessoal', description: 'Telefone pessoal' },
        { id: 'work', name: 'Trabalho', description: 'Telefone profissional' },
        { id: 'others', name: 'Outro', description: 'Outro tipo de telefone' },
      ],
    });

    console.log('Seed de tipos de telefones concluído com sucesso.');
  } catch (error) {
    console.error('Erro ao executar o seed de tipos de telefones:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedPhoneTypes();
