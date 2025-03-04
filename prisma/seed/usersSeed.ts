import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const usersData_admin = [
  { id: "idAdmin000", name: 'Administrador', usr: 'idAdmin000', psw: 'senha',
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
  { id: "idSupport001", name: 'Suporte 01', usr: 'idSupport001', psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'work' }
    ] },
    phones: { create: [
      { phone: '+5555555555',        userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_admin[0].id } }
  },
  { id: "idSupport002", name: 'Suporte 02', usr: 'idSupport002', psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'personal' }
    ] },
    phones: { create: [
        { phone: '+9999999999',      userPhoneTypeId: 'personal' }
      , { phone: '+8888888888',      userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_admin[0].id } }
  },
  { id: "idSupport003", name: 'Suporte 03', usr: 'idSupport003', psw: 'senha',
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
  { id: "idProprietario01", name: 'Proprietário 01', usr: 'idProprietario01', psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'work' }
    ] },
    phones: { create: [
      { phone: '+5555555555', userPhoneTypeId: 'personal' }
    ] }
  },
  { id: "idProprietario02", name: 'Proprietário 02', usr: 'idProprietario02', psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'personal' }
    ] },
    phones: { create: [
        { phone: '+9999999999', userPhoneTypeId: 'personal' }
      , { phone: '+8888888888', userPhoneTypeId: 'personal' }
    ] }
  },
  { id: "idProprietario03", name: 'Proprietário 03', usr: 'idProprietario03', psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'others' }
    ] },
    phones: { create: [
      { phone: '+1111111111',        userPhoneTypeId: 'personal' }
    ] }
  },
];

const usersData_manager = [
  { id: "idManager01", name: 'Gerente 01', usr: 'idManager01', psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'work' }
    ] },
    phones: { create: [
      { phone: '+5555555555', userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_owner[0].id } }
  },
  { id: "idManager02", name: 'Gerente 02', usr: 'idManager02', psw: 'senha',
emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'personal' }
    ] },
    phones: { create: [
        { phone: '+9999999999', userPhoneTypeId: 'personal' }
      , { phone: '+8888888888', userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_owner[1].id } }
  },
  { id: "idManager03", name: 'Gerente 03', usr: 'usuario', psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'others' }
    ] },
    phones: { create: [
      { phone: '+1111111111',        userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_owner[2].id } }
  },
];

const usersData_employee = [
  { id: "idEmployee01", name: 'Funcionário 01', usr: 'idEmployee01', psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'work' }
    ] },
    phones: { create: [
      { phone: '+5555555555', userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_manager[0].id } }
  },
  { id: "idEmployee02", name: 'Funcionário 02', usr: 'idEmployee02', psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'personal' }
    ] },
    phones: { create: [
        { phone: '+9999999999', userPhoneTypeId: 'personal' }
      , { phone: '+8888888888', userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_manager[0].id } }
  },
  { id: "idEmployee03", name: 'Funcionário 03', usr: 'idEmployee03', psw: 'senha',
    emails: { create: [
      { email: 'endereco@email.com', userEmailTypeId: 'others' }
    ] },
    phones: { create: [
      { phone: '+1111111111',        userPhoneTypeId: 'personal' }
    ] },
    user: { connect: { id: usersData_manager[0].id } }
  },
];

async function main() {
  for (const item of usersData_admin)    { await prisma.users.create({ data: { ...item, userType: { connect: { id: 'admin'    } }, }, }); }
  for (const item of usersData_support)  { await prisma.users.create({ data: { ...item, userType: { connect: { id: 'support'  } }, }, }); }
  for (const item of usersData_owner)    { await prisma.users.create({ data: { ...item, userType: { connect: { id: 'owner'    } }, }, }); }
  for (const item of usersData_manager)  { await prisma.users.create({ data: { ...item, userType: { connect: { id: 'manager'  } }, }, }); }
  for (const item of usersData_employee) { await prisma.users.create({ data: { ...item, userType: { connect: { id: 'employee' } }, }, }); }
  console.log('usersSeed - OK');

}

main().catch((error) => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
