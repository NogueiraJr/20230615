// Este seria o arquivo script.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Obtendo os IDs das Operações
  const userOper01 = await prisma.userOperations.findFirst({ where: { description: 'Locação de Casamento do Fulano', }, });
  
  // Obtendo os IDs do Cliente do Usuário
  const cli01 = await prisma.clients.findFirst({ where: { id: 'Cliente 01', }, });
  const userCli01 = await prisma.userClients.findFirst({ where: { userId: cli01?.id, }, });
  
  // L O C A Ç Õ E S   D E   R O U P A S
  // Obtendo os IDs das Ações das Operações
  const act01 = await prisma.actions.findFirst({ where: { action: 'reservar', system_id: userOper01?.system_id, }, });
  const act02 = await prisma.actions.findFirst({ where: { action: 'retirar',  system_id: userOper01?.system_id, }, });
  const act03 = await prisma.actions.findFirst({ where: { action: 'devolver', system_id: userOper01?.system_id, }, });
  // const act04 = await prisma.actions.findFirst({ where: { action: 'levar',    system_id: userOper01?.system_id, }, });
  // const act05 = await prisma.actions.findFirst({ where: { action: 'buscar',   system_id: userOper01?.system_id, }, });
  
  // Criando os relacionamentos
  const reservar = new Date(new Date().setDate(new Date().getDate() - 10));
  await prisma.userActions.create({ data: { 
      userOperations: { connect: { id: userOper01?.id, }, }
    , userClient: { connect: { id: userCli01?.id, }, }
    , actions: { connect: { id: act01?.id, }, }
    , description: 'Reservar as Roupas', notes: 'Anotações da Reserva das Roupas'
    , scheduledAt: new Date(reservar).toISOString()
    , executedAt:  new Date(reservar.setDate(reservar.getDate() + 1)).toISOString()
    , finishedAt:  new Date(reservar.setDate(reservar.getDate() + 1)).toISOString()
    , priceProducts: 0.00 }});

    const retirar =  new Date(new Date().setDate(new Date().getDate() - 7));
    await prisma.userActions.create({ data: { 
      userOperations: { connect: { id: userOper01?.id, }, }
    , userClient: { connect: { id: userCli01?.id, }, }
    , actions: { connect: { id: act02?.id, }, }
    , description: 'Retirar as Roupas', notes: 'Anotações da Retirada das Roupas'
    , scheduledAt: new Date(retirar).toISOString()
    , executedAt:  new Date(retirar.setDate(retirar.getDate() + 1)).toISOString()
    , finishedAt:  new Date(retirar.setDate(retirar.getDate() + 1)).toISOString()
    , priceProducts: 0.00 }});
  
    const devolver =  new Date(new Date().setDate(new Date().getDate() - 4));
    await prisma.userActions.create({ data: { 
      userOperations: { connect: { id: userOper01?.id, }, }
    , userClient: { connect: { id: userCli01?.id, }, }
    , actions: { connect: { id: act03?.id, }, }
    , description: 'Devolver as Roupas', notes: 'Anotações da Devolução das Roupas'
    , scheduledAt: new Date(devolver).toISOString()
    , executedAt:  new Date(devolver.setDate(devolver.getDate() + 1)).toISOString()
    , finishedAt:  new Date(devolver.setDate(devolver.getDate() + 1)).toISOString()
    , priceProducts: 0.00 }});

    console.log('userActionsSeed - OK');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
