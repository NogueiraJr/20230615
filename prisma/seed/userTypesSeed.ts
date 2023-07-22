// prisma/seed/userTypesSeed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userTypesData = [
  //Sistema  
  {    type: 'admin',    name: 'Administrador',  description: 'Administrador do Sistema',  },
  {    type: 'support',  name: 'Suporte',        description: 'Suporte do Sistema',  },
  
  //Interno à Empresa paga para usar o Sistema
  {    type: 'owner',    name: 'Proprietário',   description: 'Proprietário da Empresa',  },
  {    type: 'manager',  name: 'Gerente',        description: 'Gerente de Pessoal',  },
  {    type: 'employee', name: 'Funcionário',    description: 'Funcionário da Empresa',  },

  //Externo à Empresa
  {    type: 'client',   name: 'Cliente',        description: 'Cliente da Empresa',  },
  {    type: 'supplier', name: 'Fornecedor',     description: 'Fornecedor da Empresa',  },
  {    type: 'partner',  name: 'Parceiro',       description: 'Parceiro da Empresa',  },

  //Cadastrado inicialmente e ainda não idetificado
  {    type: 'user',     name: 'Usuário',        description: 'Usuário cadastrado',  },
  
];

async function main() {
  for (const userTypeData of userTypesData) {
    await prisma.userTypes.create({
      data: userTypeData,
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
