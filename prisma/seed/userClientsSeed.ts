// Este seria o arquivo script.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Obtendo os IDs dos clientes
  const c01 = await prisma.clients.findUnique({ where: { id: 'cli01', }, });
  const c02 = await prisma.clients.findUnique({ where: { id: 'cli02', }, });
  const c03 = await prisma.clients.findUnique({ where: { id: 'cli03', }, });
  const c04 = await prisma.clients.findUnique({ where: { id: 'cli04', }, });
  const c05 = await prisma.clients.findUnique({ where: { id: 'cli05', }, });
  const c06 = await prisma.clients.findUnique({ where: { id: 'cli06', }, });
  const c07 = await prisma.clients.findUnique({ where: { id: 'cli07', }, });
  const c08 = await prisma.clients.findUnique({ where: { id: 'cli08', }, });
  const c09 = await prisma.clients.findUnique({ where: { id: 'cli09', }, });
  const c10 = await prisma.clients.findUnique({ where: { id: 'cli10', }, });
  const c11 = await prisma.clients.findUnique({ where: { id: 'cli11', }, });
  const c12 = await prisma.clients.findUnique({ where: { id: 'cli12', }, });
  const c13 = await prisma.clients.findUnique({ where: { id: 'cli13', }, });
  const c14 = await prisma.clients.findUnique({ where: { id: 'cli14', }, });
  const c15 = await prisma.clients.findUnique({ where: { id: 'cli15', }, });
  const c16 = await prisma.clients.findUnique({ where: { id: 'cli16', }, });
  const c17 = await prisma.clients.findUnique({ where: { id: 'cli17', }, });
  const c18 = await prisma.clients.findUnique({ where: { id: 'cli18', }, });
  const c19 = await prisma.clients.findUnique({ where: { id: 'cli19', }, });
  const c20 = await prisma.clients.findUnique({ where: { id: 'cli20', }, });
  const c21 = await prisma.clients.findUnique({ where: { id: 'cli21', }, });
  const c22 = await prisma.clients.findUnique({ where: { id: 'cli22', }, });
  const c23 = await prisma.clients.findUnique({ where: { id: 'cli23', }, });
  const c24 = await prisma.clients.findUnique({ where: { id: 'cli24', }, });
  const c25 = await prisma.clients.findUnique({ where: { id: 'cli25', }, });
  const c26 = await prisma.clients.findUnique({ where: { id: 'cli26', }, });
  const c27 = await prisma.clients.findUnique({ where: { id: 'cli27', }, });
  const c28 = await prisma.clients.findUnique({ where: { id: 'cli28', }, });
  const c29 = await prisma.clients.findUnique({ where: { id: 'cli29', }, });
  const c30 = await prisma.clients.findUnique({ where: { id: 'cli30', }, });
  
  // Obtendo os IDs dos usuários
  const u01 = await prisma.users.findUnique({ where: { id: 'idProprietario01', }, });
  const u02 = await prisma.users.findUnique({ where: { id: 'idProprietario02', }, });
  const u03 = await prisma.users.findUnique({ where: { id: 'idProprietario03', }, });
  
  // Criando os relacionamentos
  await prisma.userClients.create({ data: { user: { connect: { id: u01?.id, }, }, client: { connect: { id: c01?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u01?.id, }, }, client: { connect: { id: c02?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u01?.id, }, }, client: { connect: { id: c03?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u01?.id, }, }, client: { connect: { id: c04?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u01?.id, }, }, client: { connect: { id: c05?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u01?.id, }, }, client: { connect: { id: c06?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u01?.id, }, }, client: { connect: { id: c07?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u01?.id, }, }, client: { connect: { id: c08?.id, }, }, }, });

  await prisma.userClients.create({ data: { user: { connect: { id: u02?.id, }, }, client: { connect: { id: c09?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u02?.id, }, }, client: { connect: { id: c10?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u02?.id, }, }, client: { connect: { id: c11?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u02?.id, }, }, client: { connect: { id: c12?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u02?.id, }, }, client: { connect: { id: c13?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u02?.id, }, }, client: { connect: { id: c14?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u02?.id, }, }, client: { connect: { id: c15?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u02?.id, }, }, client: { connect: { id: c16?.id, }, }, }, });

  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c17?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c18?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c19?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c20?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c21?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c22?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c23?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c24?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c25?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c26?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c27?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c28?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c29?.id, }, }, }, });
  await prisma.userClients.create({ data: { user: { connect: { id: u03?.id, }, }, client: { connect: { id: c30?.id, }, }, }, });

  console.log('userClientsSeed - OK');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
