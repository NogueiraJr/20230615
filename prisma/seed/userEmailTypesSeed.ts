import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedEmailTypes() {
  try {
    // Inserindo tipos de e-mails
    await prisma.userEmailTypes.createMany({
      data: [
        { id: 'personal', name: 'Pessoal',  description: 'E-mail pessoal' },
        { id: 'work',     name: 'Trabalho', description: 'E-mail profissional' },
        { id: 'others',   name: 'Outro',    description: 'Outro tipo de e-mail' },
      ],
    });

    console.log('userEmailTypesSeed - OK');
  } catch (error) {
    console.error('Erro ao executar o seed de tipos de e-mails:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedEmailTypes();
