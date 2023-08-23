import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sysLocacaoRoupasData = [
  // O P E R A C I O N A L
  { system_id: 'sysLocacaoRoupa', menu_id: "opr", module_id: 'reservaRoupa',   id: "sysLocacaoRoupa-opr-reservaRoupa", },
  { system_id: 'sysLocacaoRoupa', menu_id: "opr", module_id: 'retiradaRoupa',  id: "sysLocacaoRoupa-opr-retiradaRoupa", },
  { system_id: 'sysLocacaoRoupa', menu_id: "opr", module_id: 'devolucaoRoupa', id: "sysLocacaoRoupa-opr-devolucaoRoupa", },

  // D A D O S
  { system_id: 'sysLocacaoRoupa', menu_id: "dds", module_id: 'cadastroCliente',    id: "sysLocacaoRoupa-dds-cadastroCliente", },
  { system_id: 'sysLocacaoRoupa', menu_id: "dds", module_id: 'cadastroProduto',    id: "sysLocacaoRoupa-dds-cadastroProduto", },
  { system_id: 'sysLocacaoRoupa', menu_id: "dds", module_id: 'cadastroFornecedor', id: "sysLocacaoRoupa-dds-cadastroFornecedor", },

];

const sysOficinaCarrosData = [
  // O P E R A C I O N A L
  { system_id: 'sysOficinaCarros', menu_id: "opr", module_id: 'agendamentoRevisao', id: "sysOficinaCarros-opr-agendamentoRevisao", },

  // D A D O S
  { system_id: 'sysOficinaCarros', menu_id: "dds", module_id: 'cadastroCliente',    id: "sysOficinaCarros-dds-cadastroCliente", },
  { system_id: 'sysOficinaCarros', menu_id: "dds", module_id: 'cadastroProduto',    id: "sysOficinaCarros-dds-cadastroProduto", },
  { system_id: 'sysOficinaCarros', menu_id: "dds", module_id: 'cadastroFornecedor', id: "sysOficinaCarros-dds-cadastroFornecedor", },

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
