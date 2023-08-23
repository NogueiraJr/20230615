import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userAdmin = [
  { user_id: 'idAdmin000', SystemMenuModule_id: "sysLocacaoRoupa-opr-reservaRoupa", },
  { user_id: 'idAdmin000', SystemMenuModule_id: "sysLocacaoRoupa-opr-retiradaRoupa", },
  { user_id: 'idAdmin000', SystemMenuModule_id: "sysLocacaoRoupa-opr-devolucaoRoupa", },
  { user_id: 'idAdmin000', SystemMenuModule_id: "sysLocacaoRoupa-dds-cadastroCliente", },
  { user_id: 'idAdmin000', SystemMenuModule_id: "sysLocacaoRoupa-dds-cadastroProduto", },
  { user_id: 'idAdmin000', SystemMenuModule_id: "sysLocacaoRoupa-dds-cadastroFornecedor", },
  { user_id: 'idAdmin000', SystemMenuModule_id: "sysOficinaCarros-opr-agendamentoRevisao", },
  { user_id: 'idAdmin000', SystemMenuModule_id: "sysOficinaCarros-dds-cadastroCliente", },
  { user_id: 'idAdmin000', SystemMenuModule_id: "sysOficinaCarros-dds-cadastroProduto", },
  { user_id: 'idAdmin000', SystemMenuModule_id: "sysOficinaCarros-dds-cadastroFornecedor", },

];

async function main() {
  for (const item of userAdmin) {
    await prisma.userSystemMenuModule.create({
      data: item,
    });
  }
  console.log('userModulesSystemsMenusSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
