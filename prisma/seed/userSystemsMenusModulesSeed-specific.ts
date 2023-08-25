import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userProprietarioSysLocacaoRoupa = [
  { userId: 'idProprietario01', systemMenuModuleId: "sysLocacaoRoupa-opr-reservaRoupa", },
  { userId: 'idProprietario01', systemMenuModuleId: "sysLocacaoRoupa-opr-retiradaRoupa", },
  { userId: 'idProprietario01', systemMenuModuleId: "sysLocacaoRoupa-opr-devolucaoRoupa", },
  { userId: 'idProprietario01', systemMenuModuleId: "sysLocacaoRoupa-dds-cadastroCliente", },
  { userId: 'idProprietario01', systemMenuModuleId: "sysLocacaoRoupa-dds-cadastroProduto", },
  { userId: 'idProprietario01', systemMenuModuleId: "sysLocacaoRoupa-dds-cadastroFornecedor", },

];

const userProprietarioSysOficinaCarros = [
  { userId: 'idProprietario02', systemMenuModuleId: "sysOficinaCarros-opr-agendamentoRevisao", },
  { userId: 'idProprietario02', systemMenuModuleId: "sysOficinaCarros-dds-cadastroCliente", },
  { userId: 'idProprietario02', systemMenuModuleId: "sysOficinaCarros-dds-cadastroProduto", },
  { userId: 'idProprietario02', systemMenuModuleId: "sysOficinaCarros-dds-cadastroFornecedor", },

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
