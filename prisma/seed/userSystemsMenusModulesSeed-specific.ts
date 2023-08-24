import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userProprietarioSysLocacaoRoupa = [
  { user_id: 'idProprietario01', SystemMenuModule_id: "sysLocacaoRoupa-opr-reservaRoupa", },
  { user_id: 'idProprietario01', SystemMenuModule_id: "sysLocacaoRoupa-opr-retiradaRoupa", },
  { user_id: 'idProprietario01', SystemMenuModule_id: "sysLocacaoRoupa-opr-devolucaoRoupa", },
  { user_id: 'idProprietario01', SystemMenuModule_id: "sysLocacaoRoupa-dds-cadastroCliente", },
  { user_id: 'idProprietario01', SystemMenuModule_id: "sysLocacaoRoupa-dds-cadastroProduto", },
  { user_id: 'idProprietario01', SystemMenuModule_id: "sysLocacaoRoupa-dds-cadastroFornecedor", },

];

const userProprietarioSysOficinaCarros = [
  { user_id: 'idProprietario02', SystemMenuModule_id: "sysOficinaCarros-opr-agendamentoRevisao", },
  { user_id: 'idProprietario02', SystemMenuModule_id: "sysOficinaCarros-dds-cadastroCliente", },
  { user_id: 'idProprietario02', SystemMenuModule_id: "sysOficinaCarros-dds-cadastroProduto", },
  { user_id: 'idProprietario02', SystemMenuModule_id: "sysOficinaCarros-dds-cadastroFornecedor", },

];

async function main() {
  for (const item of userProprietarioSysLocacaoRoupa) {
    await prisma.userSystemMenuModule.create({
      data: item,
    });
  }
  for (const item of userProprietarioSysOficinaCarros) {
    await prisma.userSystemMenuModule.create({
      data: item,
    });
  }
  console.log('userSystemsMenusModulesSeed-specific - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
