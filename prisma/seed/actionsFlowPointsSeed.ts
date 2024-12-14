import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const actionsFlowPointsData = [
  // L O C A Ç Ã O   D E   R O U P A S
  { systemId: "sysLocacaoRoupa", userId: "idProprietario01",      moment: "in",  seq: "0010", name: 'Saída das Roupas',     description: 'Ação de checar Saída das Roupas', },
  { systemId: "sysLocacaoRoupa", userId: "idProprietario01",      moment: "in",  seq: "0020", name: 'Roupas Retornadas',    description: 'Ação de checar Retorno das Roupas (sujeira, rasgos, etc.', },

  // L O C A Ç Ã O   D E   C A R R O S
  // { systemId: "sysLocacaoCarro", userId: "",      moment: "in",  seq: "0010", name: 'Carroceria e Pintura', description: 'Ação de checar checar Carroceria e Pintura', },
  // { systemId: "sysLocacaoCarro", userId: "",      moment: "in",  seq: "0020", name: 'Nível de Combustível', description: 'Ação de checar checar Nível de Combustível', },

  // O F I C I N A   D E   C A R R O S
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0010", name: 'Arranhões na Lataria',      description: 'Verificar possíveis arranhões na lataria do veículo', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0020", name: 'Amassados na Carroceria',   description: 'Verificar se há amassados na carroceria', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0030", name: 'Macaco',                    description: 'Verificar se o macaco está presente e funcional', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0040", name: 'Step',                      description: 'Verificar se o step está presente e calibrado', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0050", name: 'Documentação',              description: 'Conferir se a documentação do veículo está em ordem', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0060", name: 'Interior do Veículo',       description: 'Checar o estado geral do interior do veículo', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0070", name: 'Itens Pessoais',            description: 'Verificar se há itens pessoais no interior do veículo', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0080", name: 'Combustível',               description: 'Checar o nível de combustível antes do serviço', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0090", name: 'Vidros',                    description: 'Verificar possíveis rachaduras ou danos nos vidros', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0100", name: 'Painel de Controle',        description: 'Conferir possíveis luzes de alerta no painel', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0110", name: 'Parafusos das Rodas',       description: 'Checar o aperto dos parafusos das rodas', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0120", name: 'Kit de Ferramentas',        description: 'Verificar se o kit de ferramentas está completo', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0130", name: 'Triângulo de Segurança',    description: 'Conferir se o triângulo de segurança está presente', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0140", name: 'Tapetes do Veículo',        description: 'Checar o estado dos tapetes do veículo', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0150", name: 'Sistema de Som',            description: 'Conferir o funcionamento do sistema de som', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "in",  seq: "0160", name: 'Cheiro no Interior',        description: 'Verificar se há odores no interior do veículo', },

  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0010", name: 'Calibragem dos Pneus',    description: 'Verificar Calibragem dos Pneus', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0020", name: 'Calibagem do Step',       description: 'Verificar Calibagem do Step', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0030", name: 'Óleo do Motor',           description: 'Verificar Óleo do Motor', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0040", name: 'Fluído arrefecimento',    description: 'Verificar Fluído arrefecimento', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0050", name: 'Fluído de Freio',         description: 'Verificar Fluído de Freio', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0060", name: 'Fluído de Direção',       description: 'Verificar Fluído de Direção', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0070", name: 'Bateria',                 description: 'Verificar Bateria', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0080", name: 'Painel',                  description: 'Verificar Painel', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0090", name: 'Palhetas Parabrisa',      description: 'Verificar Palhetas Parabrisa', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0100", name: 'Lâmpadas',                description: 'Verificar Lâmpadas', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0110", name: 'Etiqueta',                description: 'Verificar Etiqueta', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0120", name: 'Proteções e Capas',       description: 'Verificar Proteções e Capas', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0130", name: 'Ferramentas',             description: 'Verificar Ferramentas', },

  // P E T S H O P
  // { systemId: "sysPetShop", userId: "",            moment: "in",  seq: "0010", name: '',    description: '', },

  // C L Í N I C A   V E T E R I N Á R I A
  // { systemId: "sysClinicaVeterinaria", userId: "", moment: "in",  seq: "0010", name: '',    description: '', },

  // C A B E L E I R E I R O
  // { systemId: "sysCabeleireiro", userId: "",       moment: "in",  seq: "0010", name: '',    description: '', },

  // C L Í N I C A   E S T É T I C A
  // { systemId: "sysClinicaEstetica", userId: "",    moment: "in",  seq: "0010", name: '',    description: '', },

  // D E N T I S T A
  // { systemId: "sysDentista", userId: "",           moment: "in",  seq: "0010", name: '',    description: '', },

  // E S T Ú D I O   F O T O G R Á F I C O
  // { systemId: "sysEstudioFotografico", userId: "", moment: "in",  seq: "0010", name: '',    description: '', },

  // L A N C H O N E T E
  // { systemId: "sysLanchonete", userId: "",         moment: "in",  seq: "0010", name: '',    description: '', },

];

async function main() {
  for (const actionData of actionsFlowPointsData) {
    await prisma.actionsFlowPoints.create({
      data: actionData,
    });
  }
  console.log('actionsFlowPointsSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
