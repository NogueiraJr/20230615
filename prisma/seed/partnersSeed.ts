import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const partnersData = [
  { id: 'par01', name: 'Lavanderia Lavou Secou' },
  { id: 'par02', name: 'Lavanderia Premium' },
  { id: 'par03', name: 'Lavanderia Formosa' },
  { id: 'par04', name: 'Alfaiate Agulha Negra' },
  { id: 'par05', name: 'Alfaiate Costura Fina' },
  { id: 'par06', name: 'Alfaiate Roupas Sob Medida' },
  { id: 'par07', name: 'Transportadora Leva e Traz' },
  { id: 'par08', name: 'Transportadora Express' },
  { id: 'par09', name: 'Transportadora Rápida' },
  { id: 'par10', name: 'Reparo de Roupas Express' },
  { id: 'par11', name: 'Reparo de Roupas Remendo' },
  { id: 'par12', name: 'Reparo de Roupas Rasgão' },
  { id: 'par13', name: 'Contabilidade Fácil' },
  { id: 'par14', name: 'Contabilidade Fina' },
  
  { id: 'par15', name: 'Funilaria Pedra Mole' },
  { id: 'par16', name: 'Funilaria Riscão' },
  { id: 'par17', name: 'Funilaria Marretada' },
  { id: 'par18', name: 'Auto Elétrica Chocão' },
  { id: 'par19', name: 'Auto Elétrica Pisca Alerta' },
  { id: 'par20', name: 'Auto Elétrica Potência Máxima' },
  { id: 'par21', name: 'Lava Rápido Brilhoso' },
  { id: 'par22', name: 'Lava Rápido Lustrado' },
  { id: 'par23', name: 'Lava Rápido Polido' },
  { id: 'par24', name: 'Vitrais Trica Grossa' },
  { id: 'par25', name: 'Vitrais Toco Liso' },
  { id: 'par26', name: 'Parceiro 26' },
  { id: 'par27', name: 'Parceiro 27' },
  { id: 'par28', name: 'Parceiro 28' },
  { id: 'par29', name: 'Parceiro 29' },
  { id: 'par30', name: 'Parceiro 30' },
];

async function main() {
  for (const partnerData of partnersData) {
    await prisma.partners.create({
      data: partnerData,
    });
  }
  console.log('partnersSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
