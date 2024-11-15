import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sysLocacaoRoupasData = [
  // O P E R A C I O N A L
  { systemId: 'sysLocacaoRoupa', menuId: "opr", moduleId: 'reservaRoupa',   id: "sysLocacaoRoupa-opr-reservaRoupa", },
  { systemId: 'sysLocacaoRoupa', menuId: "opr", moduleId: 'provaRoupa',     id: "sysLocacaoRoupa-opr-provarRoupa", },
  { systemId: 'sysLocacaoRoupa', menuId: "opr", moduleId: 'retiradaRoupa',  id: "sysLocacaoRoupa-opr-retiradaRoupa", },
  { systemId: 'sysLocacaoRoupa', menuId: "opr", moduleId: 'devolucaoRoupa', id: "sysLocacaoRoupa-opr-devolucaoRoupa", },

  // D A D O S
  { systemId: 'sysLocacaoRoupa', menuId: "dds", moduleId: 'cadastroCliente',    id: "sysLocacaoRoupa-dds-cadastroCliente", },
  { systemId: 'sysLocacaoRoupa', menuId: "dds", moduleId: 'cadastroProduto',    id: "sysLocacaoRoupa-dds-cadastroProduto", },
  { systemId: 'sysLocacaoRoupa', menuId: "dds", moduleId: 'cadastroFornecedor', id: "sysLocacaoRoupa-dds-cadastroFornecedor", },
  { systemId: 'sysLocacaoRoupa', menuId: "dds", moduleId: 'cadastroParceiro',   id: "sysLocacaoRoupa-dds-cadastroParceiro", },
  
];

const sysOficinaCarroData = [
  // O P E R A C I O N A L
  { systemId: 'sysOficinaCarro', menuId: "opr", moduleId: 'agendamentoRevisao', id: "sysOficinaCarro-opr-agendamentoRevisao", },
  { systemId: 'sysOficinaCarro', menuId: "opr", moduleId: 'atendimentoCarro',   id: "sysOficinaCarro-opr-atendimentoCarro", },

  // D A D O S
  { systemId: 'sysOficinaCarro', menuId: "dds", moduleId: 'cadastroCliente',    id: "sysOficinaCarro-dds-cadastroCliente", },
  { systemId: 'sysOficinaCarro', menuId: "dds", moduleId: 'cadastroProduto',    id: "sysOficinaCarro-dds-cadastroProduto", },
  { systemId: 'sysOficinaCarro', menuId: "dds", moduleId: 'cadastroFornecedor', id: "sysOficinaCarro-dds-cadastroFornecedor", },
  { systemId: 'sysOficinaCarro', menuId: "dds", moduleId: 'cadastroParceiro',   id: "sysOficinaCarro-dds-cadastroParceiro", },

];

async function main() {
  for (const item of sysLocacaoRoupasData) {
    await prisma.systemMenuModule.create({
      data: item,
    });
  }
  for (const item of sysOficinaCarroData) {
    await prisma.systemMenuModule.create({
      data: item,
    });
  }
  console.log('systemsMenusModulesSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
