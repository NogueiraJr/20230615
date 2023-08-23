import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const menusData = [
  {    id: 'adm', seq: "0000", name: 'Administrador', description: 'Administrador do Sistema',  },
  {    id: 'spt', seq: "0100", name: 'Suporte',       description: 'Suporte do Sistema',  },
  {    id: 'own', seq: "0200", name: 'Proprietário',  description: 'Proprietário do Negócio',  },
  {    id: 'opr', seq: "0300", name: 'Operacional',   description: 'Operações no Sistema',  },
  {    id: 'dds', seq: "0400", name: 'Dados',         description: 'Dados do Sistema',  },
  {    id: 'rlt', seq: "0500", name: 'Relatórios',    description: 'Relatórios do Sistema',  },
  {    id: 'utl', seq: "0600", name: 'Utilitários',   description: 'Utilitários do Sistema',  },
  {    id: 'ajd', seq: "0700", name: 'Ajuda',         description: 'Ajuda do Sistema',  },
  {    id: 'out', seq: "9999", name: 'Sair',          description: 'Sair do Sistema',  },

];

async function main() {
  for (const menuData of menusData) {
    await prisma.menus.create({
      data: menuData,
    });
  }
  console.log('menusSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
