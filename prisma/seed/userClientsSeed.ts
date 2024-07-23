// Este seria o arquivo script.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Obtendo os IDs dos clientes
  const c01 = await prisma.clients.findFirst({ where: { name: 'Ana Silva', }, });
  const c02 = await prisma.clients.findFirst({ where: { name: 'Bruno Costa', }, });
  const c03 = await prisma.clients.findFirst({ where: { name: 'Carla Oliveira', }, });
  const c04 = await prisma.clients.findFirst({ where: { name: 'Daniel Santos', }, });
  const c05 = await prisma.clients.findFirst({ where: { name: 'Elisa Pereira', }, });
  const c06 = await prisma.clients.findFirst({ where: { name: 'Felipe Almeida', }, });
  const c07 = await prisma.clients.findFirst({ where: { name: 'Gabriela Rodrigues', }, });
  const c08 = await prisma.clients.findFirst({ where: { name: 'Henrique Ferreira', }, });
  const c09 = await prisma.clients.findFirst({ where: { name: 'Isabela Martins', }, });
  const c10 = await prisma.clients.findFirst({ where: { name: 'João Souza', }, });
  const c11 = await prisma.clients.findFirst({ where: { name: 'Karen Lima', }, });
  const c12 = await prisma.clients.findFirst({ where: { name: 'Lucas Fernandes', }, });
  const c13 = await prisma.clients.findFirst({ where: { name: 'Mariana Rocha', }, });
  const c14 = await prisma.clients.findFirst({ where: { name: 'Nelson Carvalho', }, });
  const c15 = await prisma.clients.findFirst({ where: { name: 'Olivia Mendes', }, });
  const c16 = await prisma.clients.findFirst({ where: { name: 'Pedro Azevedo', }, });
  const c17 = await prisma.clients.findFirst({ where: { name: 'Quezia Monteiro', }, });
  const c18 = await prisma.clients.findFirst({ where: { name: 'Rafael Ribeiro', }, });
  const c19 = await prisma.clients.findFirst({ where: { name: 'Sofia Nogueira', }, });
  const c20 = await prisma.clients.findFirst({ where: { name: 'Thiago Barros', }, });
  const c21 = await prisma.clients.findFirst({ where: { name: 'Ursula Machado', }, });
  const c22 = await prisma.clients.findFirst({ where: { name: 'Victor Dias', }, });
  const c23 = await prisma.clients.findFirst({ where: { name: 'Yasmin Castro', }, });
  const c24 = await prisma.clients.findFirst({ where: { name: 'William Teixeira', }, });
  const c25 = await prisma.clients.findFirst({ where: { name: 'Camila Moreira', }, });
  const c26 = await prisma.clients.findFirst({ where: { name: 'Igor Duarte', }, });
  const c27 = await prisma.clients.findFirst({ where: { name: 'Renata Almeida', }, });
  const c28 = await prisma.clients.findFirst({ where: { name: 'Otávio Pires', }, });
  const c29 = await prisma.clients.findFirst({ where: { name: 'Vanessa Lopes', }, });
  const c30 = await prisma.clients.findFirst({ where: { name: 'Leonardo Gomes', }, });
  
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
