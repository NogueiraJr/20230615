import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const rentalOperationsData = [
  // L O C A Ç Ã O   D E   R O U P A S
  { seq: "0010", system_id: "sysLocacaoRoupa", name: 'Reservar', description: 'Operação para Reservar as Roupas', },
  { seq: "0020", system_id: "sysLocacaoRoupa", name: 'Retirar',  description: 'Operação para Retirar as Roupas', },
  { seq: "0030", system_id: "sysLocacaoRoupa", name: 'Devolver', description: 'Operação para Devolver as Roupas', },
  
  // L O C A Ç Ã O   D E   C A R R O S
  { seq: "0010", system_id: "sysLocacaoCarros", name: 'Reservar', description: 'Operação para Reservar o Veículo', },
  { seq: "0020", system_id: "sysLocacaoCarros", name: 'Retirar',  description: 'Operação para Retirar o Veículo', },
  { seq: "0030", system_id: "sysLocacaoCarros", name: 'Devolver', description: 'Operação para Devolver o Veículo', },
];

async function main() {
  for (const rentalOperationData of rentalOperationsData) {
    await prisma.rentalOperations.create({
      data: rentalOperationData,
    });
  }
  console.log('rentalOperationsSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
