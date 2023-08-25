import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const modulesData = [
  // O P E R A C I O N A L
  { id: 'reservaRoupa',       seq: "0000", ref: "/reserva-roupa",       name: 'Reservar Roupas', description: 'Módulo de Reserva de Roupas', },
  { id: 'retiradaRoupa',      seq: "0000", ref: "/retirada-roupa",      name: 'Retirar Roupas',  description: 'Módulo de Retirada de Roupas', },
  { id: 'devolucaoRoupa',     seq: "0000", ref: "/devolucao-roupa",     name: 'Devolver Roupas', description: 'Módulo de Devolução de Roupas', },
  { id: 'agendamentoRevisao', seq: "0000", ref: "/agendamento-revisao", name: 'Agendar Revisão', description: 'Módulo de Agendar Revisão', },
  { id: 'atendimentoCarro',   seq: "0000", ref: "/atendimento-carro",   name: 'Atuar no Carro',  description: 'Módulo de Atuação no Carro do Cliente', },

  // D A D O S
  { id: 'cadastroCliente',    seq: "0000", ref: "/cadastro-cliente",    name: 'Cadastrar Cliente',      description: 'Módulo de Cadastrar', },
  { id: 'cadastroProduto',    seq: "0000", ref: "/cadastro-produto",    name: 'Cadastar Produto',       description: 'Módulo de Cadastar Produto', },
  { id: 'cadastroFornecedor', seq: "0000", ref: "/cadastro-fornecedor", name: 'Cadastrar Fornecedores', description: 'Módulo de Cadastrar Fornecedores', },
];

async function main() {
  for (const moduloData of modulesData) {
    await prisma.modules.create({
      data: moduloData,
    });
  }
  console.log('modulesSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
