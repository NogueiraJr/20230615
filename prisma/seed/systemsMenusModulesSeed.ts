import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sysLocacaoRoupasData = [
  // O P E R A C I O N A L
  { systemId: 'sysLocacaoRoupa', menuId: "opr", moduleId: 'reservaRoupa',   id: "sysLocacaoRoupa-opr-reservaRoupa", },
  { systemId: 'sysLocacaoRoupa', menuId: "opr", moduleId: 'retiradaRoupa',  id: "sysLocacaoRoupa-opr-retiradaRoupa", },
  { systemId: 'sysLocacaoRoupa', menuId: "opr", moduleId: 'devolucaoRoupa', id: "sysLocacaoRoupa-opr-devolucaoRoupa", },

  // D A D O S
  { systemId: 'sysLocacaoRoupa', menuId: "dds", moduleId: 'cadastroCliente',    id: "sysLocacaoRoupa-dds-cadastroCliente", },
  { systemId: 'sysLocacaoRoupa', menuId: "dds", moduleId: 'cadastroProduto',    id: "sysLocacaoRoupa-dds-cadastroProduto", },
  { systemId: 'sysLocacaoRoupa', menuId: "dds", moduleId: 'cadastroFornecedor', id: "sysLocacaoRoupa-dds-cadastroFornecedor", },
  { systemId: 'sysLocacaoRoupa', menuId: "dds", moduleId: 'cadastroParceiro',   id: "sysLocacaoRoupa-dds-cadastroParceiro", },
  
];

const sysOficinaCarrosData = [
  // O P E R A C I O N A L
  { systemId: 'sysOficinaCarros', menuId: "opr", moduleId: 'agendamentoRevisao', id: "sysOficinaCarros-opr-agendamentoRevisao", },
  { systemId: 'sysOficinaCarros', menuId: "opr", moduleId: 'atendimentoCarro',   id: "sysOficinaCarros-opr-atendimentoCarro", },

  // D A D O S
  { systemId: 'sysOficinaCarros', menuId: "dds", moduleId: 'cadastroCliente',    id: "sysOficinaCarros-dds-cadastroCliente", },
  { systemId: 'sysOficinaCarros', menuId: "dds", moduleId: 'cadastroProduto',    id: "sysOficinaCarros-dds-cadastroProduto", },
  { systemId: 'sysOficinaCarros', menuId: "dds", moduleId: 'cadastroFornecedor', id: "sysOficinaCarros-dds-cadastroFornecedor", },
  { systemId: 'sysOficinaCarros', menuId: "dds", moduleId: 'cadastroParceiro',   id: "sysOficinaCarros-dds-cadastroParceiro", },

];

async function main() {
  for (const item of sysLocacaoRoupasData) {
    await prisma.systemMenuModule.create({
      data: item,
    });
  }
  for (const item of sysOficinaCarrosData) {
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
