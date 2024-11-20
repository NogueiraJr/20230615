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
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0010", name: 'Calibragem dos Pneus',    description: 'Ação de checar Calibragem dos Pneus', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0020", name: 'Calibagem do Step',       description: 'Ação de checar Calibagem do Step', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0030", name: 'Óleo do Motor',           description: 'Ação de checar Óleo do Motor', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0040", name: 'Fluído arrefecimento',    description: 'Ação de checar Fluído arrefecimento', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0050", name: 'Fluído de Freio',         description: 'Ação de checar Fluído de Freio', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0060", name: 'Fluído de Direção',       description: 'Ação de checar Fluído de Direção', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0070", name: 'Bateria',                 description: 'Ação de checar Bateria', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0080", name: 'Painel',                  description: 'Ação de checar Painel', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0090", name: 'Palhetas Parabrisa',      description: 'Ação de checar Palhetas Parabrisa', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0100", name: 'Lâmpadas',                description: 'Ação de checar Lâmpadas', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0110", name: 'Etiqueta',                description: 'Ação de checar Etiqueta', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0120", name: 'Proteções e Capas',       description: 'Ação de checar Proteções e Capas', },
  { systemId: "sysOficinaCarro", userId: "idProprietario02",      moment: "out",  seq: "0130", name: 'Ferramentas',             description: 'Ação de checar Ferramentas', },

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
