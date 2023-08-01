// prisma/seed/userTypesSeed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userTypesData = [
  //Sistema  
  {    id: 'admin',    name: 'Administrador',  description: 'Administrador do Sistema',  },
  {    id: 'support',  name: 'Suporte',        description: 'Suporte do Sistema',  },
  
  //Interno à Empresa paga para usar o Sistema
  {    id: 'owner',    name: 'Proprietário',   description: 'Proprietário da Empresa',  },
  {    id: 'manager',  name: 'Gerente',        description: 'Gerente de Pessoal',  },
  {    id: 'employee', name: 'Funcionário',    description: 'Funcionário da Empresa',  },

  //Externo à Empresa
  {    id: 'client',   name: 'Cliente',        description: 'Cliente da Empresa',  },
  {    id: 'supplier', name: 'Fornecedor',     description: 'Fornecedor da Empresa',  },
  {    id: 'partner',  name: 'Parceiro',       description: 'Parceiro da Empresa',  },

  //Cadastrado inicialmente e ainda não idetificado
  {    id: 'user',     name: 'Usuário',        description: 'Usuário cadastrado',  },
  
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
