// prisma/seed/menusSeed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const systemsData = [
  { id: 'sysOCSTApp', seq: '0000', name: 'OCSTApp 1.0', description: 'Sistema Administrador do Aplicativo', },
  { id: 'sysLocacaoRoupa', seq: '0000', name: 'Locação de Roupas 1.0', description: 'Reservas, Retiradas e Devoluções', },
  { id: 'sysOficinaCarros', seq: '0000', name: 'Oficina de Carros 1.0', description: 'Agendamentos de Serviços, Vendas de Kits', },
  { id: 'sysPetShop', seq: '0000', name: 'PetShop 1.0', description: 'Agendamentos, Atendimentos, Orçamentos, Ficha de Atendimento', },
  { id: 'sysClinicaVeterinaria', seq: '0000', name: 'Clínica Veterinária', description: 'Agendamentos, Orçamentos, Consultas', },
  { id: 'sysLanchonete', seq: '0000', name: 'Lanchonete 1.0', description: 'Pedidos e Ordens de Serviços para a Cozinha', },
  { id: 'sysCabeleireiro', seq: '0000', name: 'Cabeleireiro 1.0', description: 'Agendamento de Horários para Atendimentos, Serviços', },
  { id: 'sysDentista', seq: '0000', name: 'Dentista 1.0', description: 'Agendamento de Consultas, Orçamentos, Atendimentos, Histórico de Pacientes', },
  { id: 'sysLocacaoCarros', seq: '0000', name: 'Locação de Carros 1.0', description: 'Reservas, Locações, Devoluções', },
  { id: 'sysClinicaEstetica', seq: '0000', name: 'Clínica Estética 1.0', description: 'Agendamentos, Orçamentos, Consultas', },
  { id: 'sysEstudioFotografico', seq: '0000', name: 'Estúdio Fotográfico 1.0', description: 'Orçamentos, Clientes, Amostras, Agendamentos', },
];

async function main() {
  for (const systemData of systemsData) {
    await prisma.systems.create({
      data: systemData,
    });
  }
  console.log('systemsSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
