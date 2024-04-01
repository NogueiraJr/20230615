import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const actionsData = [
  // L O C A Ç Ã O   D E   R O U P A S
  { action: "reservar", seq: "0010", system_id: "sysLocacaoRoupa",        name: 'Reservar', description: 'Ação de Reservar as Roupas', },
  { action: "retirar",  seq: "0020", system_id: "sysLocacaoRoupa",        name: 'Retirar',  description: 'Ação de Retirar as Roupas', },
  { action: "devolver", seq: "0030", system_id: "sysLocacaoRoupa",        name: 'Devolver', description: 'Ação de Devolver as Roupas', },
  { action: "levar",    seq: "0040", system_id: "sysLocacaoRoupa",        name: 'Levar',    description: 'Ação de Levar as Roupas', },
  { action: "buscar",   seq: "0050", system_id: "sysLocacaoRoupa",        name: 'Buscar',   description: 'Ação de Buscar as Roupas', },
  
  // L O C A Ç Ã O   D E   C A R R O S
  { action: "reservar", seq: "0010", system_id: "sysLocacaoCarros",       name: 'Reservar', description: 'Ação de Reservar o Veículo', },
  { action: "retirar",  seq: "0020", system_id: "sysLocacaoCarros",       name: 'Retirar',  description: 'Ação de Retirar o Veículo', },
  { action: "devolver", seq: "0030", system_id: "sysLocacaoCarros",       name: 'Devolver', description: 'Ação de Devolver o Veículo', },
  { action: "levar",    seq: "0040", system_id: "sysLocacaoCarros",       name: 'Levar',    description: 'Ação de Levar o Veículo', },
  { action: "buscar",   seq: "0050", system_id: "sysLocacaoCarros",       name: 'Buscar',   description: 'Ação de Buscar o Veículo', },

  // O F I C I N A   D E   C A R R O S
  { action: "orcar",    seq: "0010", system_id: "sysOficinaCarros",       name: 'Orçar',    description: 'Ação de Orçar um Serviço', },
  { action: "executar", seq: "0020", system_id: "sysOficinaCarros",       name: 'Executar', description: 'Ação de Executar um Serviço', },
  { action: "buscar",   seq: "0030", system_id: "sysOficinaCarros",       name: 'Buscar',   description: 'Ação de Buscar o Veículo', },
  { action: "levar",    seq: "0040", system_id: "sysOficinaCarros",       name: 'Levar',    description: 'Ação de Levar o Veículo', },

  // P E T S H O P
  { action: "orcar",    seq: "0010", system_id: "sysPetShop",             name: 'Orçar',    description: 'Ação de Orçar um Atendimento', },
  { action: "executar", seq: "0020", system_id: "sysPetShop",             name: 'Executar', description: 'Ação de Executar um Atendimento', },
  { action: "buscar",   seq: "0030", system_id: "sysPetShop",             name: 'Buscar',   description: 'Ação de Buscar o Pet', },
  { action: "levar",    seq: "0040", system_id: "sysPetShop",             name: 'Levar',    description: 'Ação de Levar o Pet', },

  // C L Í N I C A   V E T E R I N Á R I A
  { action: "orcar",    seq: "0010", system_id: "sysClinicaVeterinaria",  name: 'Orçar',    description: 'Ação de Orçar um Atendimento', },
  { action: "executar", seq: "0020", system_id: "sysClinicaVeterinaria",  name: 'Executar', description: 'Ação de Executar um Atendimento', },
  { action: "buscar",   seq: "0030", system_id: "sysClinicaVeterinaria",  name: 'Buscar',   description: 'Ação de Buscar o Pet', },
  { action: "levar",    seq: "0040", system_id: "sysClinicaVeterinaria",  name: 'Levar',    description: 'Ação de Levar o Pet', },

  // C A B E L E I R E I R O
  { action: "orcar",    seq: "0010", system_id: "sysCabeleireiro",        name: 'Orçar',    description: 'Ação de Orçar um Atendimento', },
  { action: "executar", seq: "0020", system_id: "sysCabeleireiro",        name: 'Executar', description: 'Ação de Executar um Atendimento', },

  // C L Í N I C A   E S T É T I C A
  { action: "orcar",    seq: "0010", system_id: "sysClinicaEstetica",     name: 'Orçar',    description: 'Ação de Orçar um Atendimento', },
  { action: "executar", seq: "0020", system_id: "sysClinicaEstetica",     name: 'Executar', description: 'Ação de Executar um Atendimento', },

  // D E N T I S T A
  { action: "orcar",    seq: "0010", system_id: "sysDentista",            name: 'Orçar',    description: 'Ação de Orçar um Atendimento', },
  { action: "executar", seq: "0020", system_id: "sysDentista",            name: 'Executar', description: 'Ação de Executar um Atendimento', },

  // E S T Ú D I O   F O T O G R Á F I C O
  { action: "orcar",    seq: "0010", system_id: "sysEstudioFotografico",  name: 'Orçar',    description: 'Ação de Orçar um Atendimento', },
  { action: "executar", seq: "0020", system_id: "sysEstudioFotografico",  name: 'Executar', description: 'Ação de Executar um Atendimento', },

  // L A N C H O N E T E
  { action: "atender",  seq: "0010", system_id: "sysLanchonete",          name: 'Atender',  description: 'Ação de realizar um Atendimento', },

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
