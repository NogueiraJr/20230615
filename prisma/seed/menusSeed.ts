import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const menusData = [
  {    id: 'adm', seq: "0000", ref: "/adm", name: 'Administrador', description: 'Administrador do Sistema',  },
  {    id: 'spt', seq: "0100", ref: "/spt", name: 'Suporte',       description: 'Suporte do Sistema',  },
  {    id: 'own', seq: "0200", ref: "/own", name: 'Proprietário',  description: 'Proprietário do Negócio',  },
  {    id: 'opr', seq: "0300", ref: "/opr", name: 'Operacional',   description: 'Operações no Sistema',  },
  {    id: 'dds', seq: "0400", ref: "/dds", name: 'Dados',         description: 'Dados do Sistema',  },
  {    id: 'rlt', seq: "0500", ref: "/rlt", name: 'Relatórios',    description: 'Relatórios do Sistema',  },
  {    id: 'utl', seq: "0600", ref: "/utl", name: 'Utilitários',   description: 'Utilitários do Sistema',  },
  {    id: 'ajd', seq: "0700", ref: "/ajd", name: 'Ajuda',         description: 'Ajuda do Sistema',  },
  {    id: 'out', seq: "9999", ref: "/out", name: 'Sair',          description: 'Sair do Sistema',  },

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
