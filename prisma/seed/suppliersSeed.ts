import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const suppliersData = [
  { id: 'sup01', name: 'Fantasias Festa Fina' },
  { id: 'sup02', name: 'Roupas Sociais Pano Fino' },
  { id: 'sup03', name: 'Trajes para Festas Fiestico' },
  { id: 'sup04', name: 'Puro Salto Sapatos Femininos' },
  { id: 'sup05', name: 'Tropeço Sapatos Masculinos' },
  { id: 'sup06', name: 'Despojados Ternos e Cia' },
  { id: 'sup07', name: 'Linda Noiva Vestidos de Noivas' },
  { id: 'sup08', name: 'Vai na Fé Acessórios e Vestimentas' },
  { id: 'sup09', name: 'Rasgão Panos e Fios' },
  { id: 'sup10', name: 'Colorias Tintas e Cores' },
  { id: 'sup11', name: 'Freios Brecada e Cia' },
  { id: 'sup12', name: 'Radiadores Água Morna' },
  { id: 'sup13', name: 'Suspensão Moleca' },
  { id: 'sup14', name: 'Freios Piso Duro' },
  { id: 'sup15', name: 'Pneus Carecão' },
  { id: 'sup16', name: 'Fuídos Óleo Solto' },
  { id: 'sup17', name: 'Filtros Sufoco' },
  { id: 'sup18', name: 'Amortecedores Quebra Mola' },
  { id: 'sup19', name: 'Suspensão Durão' },
  { id: 'sup20', name: 'Tapeçaria Pano Liso' },
  { id: 'sup21', name: 'Fornecedor 21' },
  { id: 'sup22', name: 'Fornecedor 22' },
  { id: 'sup23', name: 'Fornecedor 23' },
  { id: 'sup24', name: 'Fornecedor 24' },
  { id: 'sup25', name: 'Fornecedor 25' },
  { id: 'sup26', name: 'Fornecedor 26' },
  { id: 'sup27', name: 'Fornecedor 27' },
  { id: 'sup28', name: 'Fornecedor 28' },
  { id: 'sup29', name: 'Fornecedor 29' },
  { id: 'sup30', name: 'Fornecedor 30' },
];

async function main() {
  for (const supplierData of suppliersData) {
    await prisma.suppliers.create({
      data: supplierData,
    });
  }
  console.log('suppliersSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
