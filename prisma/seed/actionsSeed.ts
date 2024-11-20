import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const actionsData = [
  // L O C A Ç Ã O   D E   R O U P A S
  { id: "sysLocacaoRoupa_reservar",       action: "reservar", seq: "0010", systemId: "sysLocacaoRoupa",        name: 'Reservar', description: 'Ação de Reservar as Roupas', },
  { id: "sysLocacaoRoupa_provar",         action: "provar",   seq: "0020", systemId: "sysLocacaoRoupa",        name: 'Provar',   description: 'Ação de Provar as Roupas', },
  { id: "sysLocacaoRoupa_retirar",        action: "retirar",  seq: "0030", systemId: "sysLocacaoRoupa",        name: 'Retirar',  description: 'Ação de Retirar as Roupas', },
  { id: "sysLocacaoRoupa_devolver",       action: "devolver", seq: "0040", systemId: "sysLocacaoRoupa",        name: 'Devolver', description: 'Ação de Devolver as Roupas', },
  { id: "sysLocacaoRoupa_levar",          action: "levar",    seq: "0050", systemId: "sysLocacaoRoupa",        name: 'Levar',    description: 'Ação de Levar as Roupas', },
  { id: "sysLocacaoRoupa_buscar",         action: "buscar",   seq: "0060", systemId: "sysLocacaoRoupa",        name: 'Buscar',   description: 'Ação de Buscar as Roupas', },
  
  // L O C A Ç Ã O   D E   C A R R O S
  { id: "sysLocacaoCarro_reservar",       action: "reservar", seq: "0010", systemId: "sysLocacaoCarro",        name: 'Reservar', description: 'Ação de Reservar o Veículo', },
  { id: "sysLocacaoCarro_retirar",        action: "retirar",  seq: "0020", systemId: "sysLocacaoCarro",        name: 'Retirar',  description: 'Ação de Retirar o Veículo', },
  { id: "sysLocacaoCarro_devolver",       action: "devolver", seq: "0030", systemId: "sysLocacaoCarro",        name: 'Devolver', description: 'Ação de Devolver o Veículo', },
  { id: "sysLocacaoCarro_levar",          action: "levar",    seq: "0040", systemId: "sysLocacaoCarro",        name: 'Levar',    description: 'Ação de Levar o Veículo', },
  { id: "sysLocacaoCarro_buscar",         action: "buscar",   seq: "0050", systemId: "sysLocacaoCarro",        name: 'Buscar',   description: 'Ação de Buscar o Veículo', },

  // O F I C I N A   D E   C A R R O S
  { id: "sysOficinaCarro_diagnosticar",   action: "diagnosticar", seq: "0010", systemId: "sysOficinaCarro",        name: 'Diagnosticar', description: 'Ação de Diagnosticar um Serviço', },
  { id: "sysOficinaCarro_orcar",          action: "orcar",        seq: "0020", systemId: "sysOficinaCarro",        name: 'Orçar',        description: 'Ação de Orçar um Serviço', },
  { id: "sysOficinaCarro_executar",       action: "executar",     seq: "0030", systemId: "sysOficinaCarro",        name: 'Executar',     description: 'Ação de Executar um Serviço', },
  { id: "sysOficinaCarro_buscar",         action: "buscar",       seq: "0040", systemId: "sysOficinaCarro",        name: 'Buscar',       description: 'Ação de Buscar o Veículo', },
  { id: "sysOficinaCarro_levar",          action: "levar",        seq: "0050", systemId: "sysOficinaCarro",        name: 'Levar',        description: 'Ação de Levar o Veículo', },

  // P E T S H O P
  { id: "sysPetShop_orcar",               action: "orcar",    seq: "0010", systemId: "sysPetShop",             name: 'Orçar',    description: 'Ação de Orçar um Atendimento', },
  { id: "sysPetShop_executar",            action: "executar", seq: "0020", systemId: "sysPetShop",             name: 'Executar', description: 'Ação de Executar um Atendimento', },
  { id: "sysPetShop_buscar",              action: "buscar",   seq: "0030", systemId: "sysPetShop",             name: 'Buscar',   description: 'Ação de Buscar o Pet', },
  { id: "sysPetShop_levar",               action: "levar",    seq: "0040", systemId: "sysPetShop",             name: 'Levar',    description: 'Ação de Levar o Pet', },

  // C L Í N I C A   V E T E R I N Á R I A
  { id: "sysClinicaVeterinaria_diagnosticar", action: "diagnosticar", seq: "0010", systemId: "sysClinicaVeterinaria",  name: 'Diagnosticar', description: 'Ação de Diagnosticar um Atendimento', },
  { id: "sysClinicaVeterinaria_orcar",        action: "orcar",        seq: "0020", systemId: "sysClinicaVeterinaria",  name: 'Orçar',        description: 'Ação de Orçar um Atendimento', },
  { id: "sysClinicaVeterinaria_executar",     action: "executar",     seq: "0030", systemId: "sysClinicaVeterinaria",  name: 'Executar',     description: 'Ação de Executar um Atendimento', },
  { id: "sysClinicaVeterinaria_buscar",       action: "buscar",       seq: "0040", systemId: "sysClinicaVeterinaria",  name: 'Buscar',       description: 'Ação de Buscar o Pet', },
  { id: "sysClinicaVeterinaria_levar",        action: "levar",        seq: "0050", systemId: "sysClinicaVeterinaria",  name: 'Levar',        description: 'Ação de Levar o Pet', },

  // C A B E L E I R E I R O
  { id: "sysCabeleireiro_orcar",          action: "orcar",    seq: "0010", systemId: "sysCabeleireiro",        name: 'Orçar',    description: 'Ação de Orçar um Atendimento', },
  { id: "sysCabeleireiro_executar",       action: "executar", seq: "0020", systemId: "sysCabeleireiro",        name: 'Executar', description: 'Ação de Executar um Atendimento', },

  // C L Í N I C A   E S T É T I C A
  { id: "sysClinicaEstetica_orcar",       action: "orcar",    seq: "0010", systemId: "sysClinicaEstetica",     name: 'Orçar',    description: 'Ação de Orçar um Atendimento', },
  { id: "sysClinicaEstetica_executar",    action: "executar", seq: "0020", systemId: "sysClinicaEstetica",     name: 'Executar', description: 'Ação de Executar um Atendimento', },

  // D E N T I S T A
  { id: "sysDentista_diagnosticar",       action: "diagnosticar", seq: "0010", systemId: "sysDentista",            name: 'Diagnosticar', description: 'Ação de Diagnosticar um Atendimento', },
  { id: "sysDentista_orcar",              action: "orcar",        seq: "0020", systemId: "sysDentista",            name: 'Orçar',        description: 'Ação de Orçar um Atendimento', },
  { id: "sysDentista_executar",           action: "executar",     seq: "0030", systemId: "sysDentista",            name: 'Executar',     description: 'Ação de Executar um Atendimento', },

  // E S T Ú D I O   F O T O G R Á F I C O
  { id: "sysEstudioFotografico_orcar",    action: "orcar",    seq: "0010", systemId: "sysEstudioFotografico",  name: 'Orçar',    description: 'Ação de Orçar um Atendimento', },
  { id: "sysEstudioFotografico_executar", action: "executar", seq: "0020", systemId: "sysEstudioFotografico",  name: 'Executar', description: 'Ação de Executar um Atendimento', },

  // L A N C H O N E T E
  { id: "sysLanchonete_atender",          action: "atender",  seq: "0010", systemId: "sysLanchonete",          name: 'Atender',  description: 'Ação de realizar um Atendimento', },

];

async function main() {
  for (const actionData of actionsData) {
    await prisma.actions.create({
      data: actionData,
    });
  }
  console.log('actionsSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
