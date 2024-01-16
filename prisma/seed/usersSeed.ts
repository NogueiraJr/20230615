import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const usersData_admin = [
  {
    id: "idAdmin000",
    name: 'Administrador',
    usr: 'usuario',
    psw: 'senha',
    emails: { create: [
        { email: 'admin@emailwork.com',     userEmailTypeId: 'work' }
      , { email: 'admin@emailpersonal.com', userEmailTypeId: 'personal' }
    ] },
    phones: { create: [
        { phone: '+1234567890', userPhoneTypeId: 'personal' }
      , { phone: '+9876543210', userPhoneTypeId: 'work' }
    ] }
  }
];

const usersData_support = [
  {
    id: "idSupport001",
    name: 'Suporte 01',
    usr: 'usuario',
    psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'work' }
    ] },
    phones: { create: [
      { phone: '+5555555555',        userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_admin[0].id } }
  },
  {
    id: "idSupport002",
    name: 'Suporte 02',
    usr: 'usuario',
    psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'personal' }
    ] },
    phones: { create: [
        { phone: '+9999999999',      userPhoneTypeId: 'personal' }
      , { phone: '+8888888888',      userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_admin[0].id } }
  },
  {
    id: "idSupport003",
    name: 'Suporte 03',
    usr: 'usuario',
    psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'others' }
    ] },
    phones: { create: [
      { phone: '+1111111111',        userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_admin[0].id } }
  },
];

const usersData_owner = [
  {
    id: "idProprietario01",
    name: 'Proprietário 01',
    usr: 'usuario',
    psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'work' }
    ] },
    phones: { create: [
      { phone: '+5555555555', userPhoneTypeId: 'personal' }
    ] }
  },
  {
    id: "idProprietario02",
    name: 'Proprietário 02',
    usr: 'usuario',
    psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'personal' }
    ] },
    phones: { create: [
        { phone: '+9999999999', userPhoneTypeId: 'personal' }
      , { phone: '+8888888888', userPhoneTypeId: 'personal' }
    ] }
  },
  {
    id: "idProprietario03",
    name: 'Proprietário 03',
    usr: 'usuario',
    psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'others' }
    ] },
    phones: { create: [
      { phone: '+1111111111',        userPhoneTypeId: 'personal' }
    ] }
  },
];

const usersData_manager = [
  {
    name: 'Gerente 01',
    usr: 'usuario',
    psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'work' }
    ] },
    phones: { create: [
      { phone: '+5555555555', userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_owner[0].id } }
  },
  {
    name: 'Gerente 02',
    usr: 'usuario',
    psw: 'senha',
emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'personal' }
    ] },
    phones: { create: [
        { phone: '+9999999999', userPhoneTypeId: 'personal' }
      , { phone: '+8888888888', userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_owner[1].id } }
  },
  {
    name: 'Gerente 03',
    usr: 'usuario',
    psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'others' }
    ] },
    phones: { create: [
      { phone: '+1111111111',        userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_owner[2].id } }
  },
];

async function main() {
  for (const item of usersData_admin)   { await prisma.users.create({ data: { ...item, userType: { connect: { id: 'admin' } }, }, }); }
  for (const item of usersData_support) { await prisma.users.create({ data: { ...item, userType: { connect: { id: 'support'  } }, }, }); }
  for (const item of usersData_owner)   { await prisma.users.create({ data: { ...item, userType: { connect: { id: 'owner'  } }, }, }); }
  for (const item of usersData_manager) { await prisma.users.create({ data: { ...item, userType: { connect: { id: 'manager'  } }, }, }); }
  console.log('usersSeed - OK');

}

main().catch((error) => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
