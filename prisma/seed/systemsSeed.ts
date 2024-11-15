import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const systemsData = [
  //Admin
  { id: 'sysOCSTApp',            seq: '0000', name: 'OCSTApp 1.0',             description: 'Sistema Administrador do Aplicativo', },
  //Locações
  { id: 'sysLocacaoRoupa',       seq: '0110', name: 'Locação de Roupas 1.0',   description: 'Reservas, Provas, Retiradas e Devoluções', },
  { id: 'sysLocacaoCarro',       seq: '0120', name: 'Locação de Carros 1.0',   description: 'Reservas, Locações, Devoluções', },
  //Oficina
  { id: 'sysOficinaCarro',       seq: '0210', name: 'Oficina de Carros 1.0',   description: 'Agendamentos de Serviços, Vendas de Kits', },
  //Pet
  { id: 'sysPetShop',            seq: '0310', name: 'PetShop 1.0',             description: 'Agendamentos, Atendimentos, Orçamentos, Ficha de Atendimento', },
  { id: 'sysClinicaVeterinaria', seq: '0320', name: 'Clínica Veterinária 1.0', description: 'Agendamentos, Orçamentos, Consultas', },
  //Estética
  { id: 'sysCabeleireiro',       seq: '0410', name: 'Cabeleireiro 1.0',        description: 'Agendamento de Horários para Atendimentos, Serviços', },
  { id: 'sysClinicaEstetica',    seq: '0420', name: 'Clínica Estética 1.0',    description: 'Agendamentos, Orçamentos, Consultas', },
  //Saúde
  { id: 'sysDentista',           seq: '0510', name: 'Dentista 1.0',            description: 'Agendamento de Consultas, Orçamentos, Atendimentos, Histórico de Pacientes', },
  //Eventos
  { id: 'sysEstudioFotografico', seq: '0610', name: 'Estúdio Fotográfico 1.0', description: 'Orçamentos, Clientes, Amostras, Agendamentos', },
  //Alimentação
  { id: 'sysLanchonete',         seq: '0710', name: 'Lanchonete 1.0',          description: 'Pedidos e Ordens de Serviços para a Cozinha', },
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
