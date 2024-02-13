// Este seria o arquivo script.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Obtendo os IDs dos fornecedores
  const s01 = await prisma.suppliers.findUnique({ where: { id: 'sup01', }, });
  const s02 = await prisma.suppliers.findUnique({ where: { id: 'sup02', }, });
  const s03 = await prisma.suppliers.findUnique({ where: { id: 'sup03', }, });
  const s04 = await prisma.suppliers.findUnique({ where: { id: 'sup04', }, });
  const s05 = await prisma.suppliers.findUnique({ where: { id: 'sup05', }, });
  const s06 = await prisma.suppliers.findUnique({ where: { id: 'sup06', }, });
  const s07 = await prisma.suppliers.findUnique({ where: { id: 'sup07', }, });
  const s08 = await prisma.suppliers.findUnique({ where: { id: 'sup08', }, });
  const s09 = await prisma.suppliers.findUnique({ where: { id: 'sup09', }, });
  const s10 = await prisma.suppliers.findUnique({ where: { id: 'sup10', }, });
  const s11 = await prisma.suppliers.findUnique({ where: { id: 'sup11', }, });
  const s12 = await prisma.suppliers.findUnique({ where: { id: 'sup12', }, });
  const s13 = await prisma.suppliers.findUnique({ where: { id: 'sup13', }, });
  const s14 = await prisma.suppliers.findUnique({ where: { id: 'sup14', }, });
  const s15 = await prisma.suppliers.findUnique({ where: { id: 'sup15', }, });
  const s16 = await prisma.suppliers.findUnique({ where: { id: 'sup16', }, });
  const s17 = await prisma.suppliers.findUnique({ where: { id: 'sup17', }, });
  const s18 = await prisma.suppliers.findUnique({ where: { id: 'sup18', }, });
  const s19 = await prisma.suppliers.findUnique({ where: { id: 'sup19', }, });
  const s20 = await prisma.suppliers.findUnique({ where: { id: 'sup20', }, });
  const s21 = await prisma.suppliers.findUnique({ where: { id: 'sup21', }, });
  const s22 = await prisma.suppliers.findUnique({ where: { id: 'sup22', }, });
  const s23 = await prisma.suppliers.findUnique({ where: { id: 'sup23', }, });
  const s24 = await prisma.suppliers.findUnique({ where: { id: 'sup24', }, });
  const s25 = await prisma.suppliers.findUnique({ where: { id: 'sup25', }, });
  const s26 = await prisma.suppliers.findUnique({ where: { id: 'sup26', }, });
  const s27 = await prisma.suppliers.findUnique({ where: { id: 'sup27', }, });
  const s28 = await prisma.suppliers.findUnique({ where: { id: 'sup28', }, });
  const s29 = await prisma.suppliers.findUnique({ where: { id: 'sup29', }, });
  const s30 = await prisma.suppliers.findUnique({ where: { id: 'sup30', }, });
  
  // Obtendo os IDs dos usuários
  const u01 = await prisma.users.findUnique({ where: { id: 'idProprietario01', }, });
  const u02 = await prisma.users.findUnique({ where: { id: 'idProprietario02', }, });
  const u03 = await prisma.users.findUnique({ where: { id: 'idProprietario03', }, });
  
  // Criando os relacionamentos
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u01?.id, }, }, supplier: { connect: { id: s01?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u01?.id, }, }, supplier: { connect: { id: s02?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u01?.id, }, }, supplier: { connect: { id: s03?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u01?.id, }, }, supplier: { connect: { id: s04?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u01?.id, }, }, supplier: { connect: { id: s05?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u01?.id, }, }, supplier: { connect: { id: s06?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u01?.id, }, }, supplier: { connect: { id: s07?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u01?.id, }, }, supplier: { connect: { id: s08?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u01?.id, }, }, supplier: { connect: { id: s09?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u01?.id, }, }, supplier: { connect: { id: s10?.id, }, }, }, });

  await prisma.userSuppliers.create({ data: { user: { connect: { id: u02?.id, }, }, supplier: { connect: { id: s11?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u02?.id, }, }, supplier: { connect: { id: s12?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u02?.id, }, }, supplier: { connect: { id: s13?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u02?.id, }, }, supplier: { connect: { id: s14?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u02?.id, }, }, supplier: { connect: { id: s15?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u02?.id, }, }, supplier: { connect: { id: s16?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u02?.id, }, }, supplier: { connect: { id: s17?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u02?.id, }, }, supplier: { connect: { id: s18?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u02?.id, }, }, supplier: { connect: { id: s19?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u02?.id, }, }, supplier: { connect: { id: s20?.id, }, }, }, });

  await prisma.userSuppliers.create({ data: { user: { connect: { id: u03?.id, }, }, supplier: { connect: { id: s21?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u03?.id, }, }, supplier: { connect: { id: s22?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u03?.id, }, }, supplier: { connect: { id: s23?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u03?.id, }, }, supplier: { connect: { id: s24?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u03?.id, }, }, supplier: { connect: { id: s25?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u03?.id, }, }, supplier: { connect: { id: s26?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u03?.id, }, }, supplier: { connect: { id: s27?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u03?.id, }, }, supplier: { connect: { id: s28?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u03?.id, }, }, supplier: { connect: { id: s29?.id, }, }, }, });
  await prisma.userSuppliers.create({ data: { user: { connect: { id: u03?.id, }, }, supplier: { connect: { id: s30?.id, }, }, }, });

  console.log('userSuppliersSeed - OK');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
