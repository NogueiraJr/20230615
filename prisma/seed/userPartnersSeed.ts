// Este seria o arquivo script.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Obtendo os IDs dos parceiros
  const p01 = await prisma.partners.findUnique({ where: { id: 'par01', }, });
  const p02 = await prisma.partners.findUnique({ where: { id: 'par02', }, });
  const p03 = await prisma.partners.findUnique({ where: { id: 'par03', }, });
  const p04 = await prisma.partners.findUnique({ where: { id: 'par04', }, });
  const p05 = await prisma.partners.findUnique({ where: { id: 'par05', }, });
  const p06 = await prisma.partners.findUnique({ where: { id: 'par06', }, });
  const p07 = await prisma.partners.findUnique({ where: { id: 'par07', }, });
  const p08 = await prisma.partners.findUnique({ where: { id: 'par08', }, });
  const p09 = await prisma.partners.findUnique({ where: { id: 'par09', }, });
  const p10 = await prisma.partners.findUnique({ where: { id: 'par10', }, });
  const p11 = await prisma.partners.findUnique({ where: { id: 'par11', }, });
  const p12 = await prisma.partners.findUnique({ where: { id: 'par12', }, });
  const p13 = await prisma.partners.findUnique({ where: { id: 'par13', }, });
  const p14 = await prisma.partners.findUnique({ where: { id: 'par14', }, });
  const p15 = await prisma.partners.findUnique({ where: { id: 'par15', }, });
  const p16 = await prisma.partners.findUnique({ where: { id: 'par16', }, });
  const p17 = await prisma.partners.findUnique({ where: { id: 'par17', }, });
  const p18 = await prisma.partners.findUnique({ where: { id: 'par18', }, });
  const p19 = await prisma.partners.findUnique({ where: { id: 'par19', }, });
  const p20 = await prisma.partners.findUnique({ where: { id: 'par20', }, });
  const p21 = await prisma.partners.findUnique({ where: { id: 'par21', }, });
  const p22 = await prisma.partners.findUnique({ where: { id: 'par22', }, });
  const p23 = await prisma.partners.findUnique({ where: { id: 'par23', }, });
  const p24 = await prisma.partners.findUnique({ where: { id: 'par24', }, });
  const p25 = await prisma.partners.findUnique({ where: { id: 'par25', }, });
  const p26 = await prisma.partners.findUnique({ where: { id: 'par26', }, });
  const p27 = await prisma.partners.findUnique({ where: { id: 'par27', }, });
  const p28 = await prisma.partners.findUnique({ where: { id: 'par28', }, });
  const p29 = await prisma.partners.findUnique({ where: { id: 'par29', }, });
  const p30 = await prisma.partners.findUnique({ where: { id: 'par30', }, });
  
  // Obtendo os IDs dos usuários
  const u01 = await prisma.users.findUnique({ where: { id: 'idProprietario01', }, });
  const u02 = await prisma.users.findUnique({ where: { id: 'idProprietario02', }, });
  const u03 = await prisma.users.findUnique({ where: { id: 'idProprietario03', }, });
  
  // Criando os relacionamentos
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p01?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p02?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p03?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p04?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p05?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p06?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p07?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p08?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p09?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p10?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p11?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p12?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p13?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u01?.id, }, }, partner: { connect: { id: p14?.id, }, }, }, });

  await prisma.userPartners.create({ data: { user: { connect: { id: u02?.id, }, }, partner: { connect: { id: p15?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u02?.id, }, }, partner: { connect: { id: p16?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u02?.id, }, }, partner: { connect: { id: p17?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u02?.id, }, }, partner: { connect: { id: p18?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u02?.id, }, }, partner: { connect: { id: p19?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u02?.id, }, }, partner: { connect: { id: p20?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u02?.id, }, }, partner: { connect: { id: p21?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u02?.id, }, }, partner: { connect: { id: p22?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u02?.id, }, }, partner: { connect: { id: p23?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u02?.id, }, }, partner: { connect: { id: p24?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u02?.id, }, }, partner: { connect: { id: p25?.id, }, }, }, });

  await prisma.userPartners.create({ data: { user: { connect: { id: u03?.id, }, }, partner: { connect: { id: p26?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u03?.id, }, }, partner: { connect: { id: p27?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u03?.id, }, }, partner: { connect: { id: p28?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u03?.id, }, }, partner: { connect: { id: p29?.id, }, }, }, });
  await prisma.userPartners.create({ data: { user: { connect: { id: u03?.id, }, }, partner: { connect: { id: p30?.id, }, }, }, });

  console.log('userPartnersSeed - OK');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
