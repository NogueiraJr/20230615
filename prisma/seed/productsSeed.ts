import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productsData = [
  { name: 'Vestido de Festa', description: 'Vestidos elegantes e sofisticados adequados para eventos formais, como casamentos, bailes de formatura e festas de gala.', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Terno', description: 'Conjunto de calça e paletó elegante para homens, adequado para eventos formais, reuniões de negócios e ocasiões especiais.', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Vestido de Noiva', description: 'Vestidos de noiva em uma variedade de estilos, cortes e designs para o dia mais especial na vida de uma mulher.', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Smoking', description: 'Traje formal para homens, geralmente usado em eventos de gala, casamentos formais e ocasiões de luxo à noite.', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Vestido de Cocktail', description: 'Vestidos semi-formais mais curtos, ideais para eventos semi-formais, coquetéis, festas de aniversário e eventos corporativos descontraídos.', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Vestido de Dama de Honra', description: 'Vestidos elegantes e coordenados para as damas de honra em casamentos, disponíveis em uma variedade de cores e estilos.', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Traje Infantil', description: 'Conjuntos de roupas formais para crianças, incluindo ternos para meninos e vestidos elegantes para meninas, para ocasiões especiais.', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Acessórios de Noiva', description: 'Acessórios como véus, tiaras, luvas e joias para complementar o vestido de noiva e completar o visual da noiva.', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Roupa de Convidados', description: 'Opções de trajes formais e semi-formais para convidados de casamentos, festas de gala, eventos corporativos e outras ocasiões especiais.', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Vestido de Madrinha', description: 'Vestidos elegantes e coordenados para as madrinhas em casamentos, disponíveis em uma variedade de estilos e cores.', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  { name: 'Smoking Infantil', description: 'Versões em miniatura de smokings para meninos, perfeitos para eventos formais, casamentos e festas.', productType_id: 'product', user_id: 'idProprietario01', system_id: 'sysLocacaoRoupa' },
  
  { name: 'Troca de óleo', description: 'Substituição do óleo do motor por um novo e filtro de óleo para garantir a lubrificação adequada e prolongar a vida útil do motor.', productType_id: 'service', user_id: 'idProprietario02', system_id: 'sysOficinaCarros' },
  { name: 'Troca de filtros', description: 'Substituição de filtros de ar, óleo e combustível para manter o sistema de filtragem do veículo em bom funcionamento.', productType_id: 'service', user_id: 'idProprietario02', system_id: 'sysOficinaCarros' },
  { name: 'Alinhamento e balanceamento', description: 'Ajuste preciso da geometria das rodas para garantir que o veículo se mova suavemente e em linha reta, reduzindo o desgaste dos pneus.', productType_id: 'service', user_id: 'idProprietario02', system_id: 'sysOficinaCarros' },
  { name: 'Troca de correias', description: 'Substituição de correias do motor (como correia dentada, correia do alternador, etc.) para evitar falhas e danos no motor.', productType_id: 'service', user_id: 'idProprietario02', system_id: 'sysOficinaCarros' },
  { name: 'Troca de freios', description: 'Substituição de pastilhas de freio, discos de freio e/ou fluido de freio para garantir a segurança e eficiência do sistema de freios.', productType_id: 'service', user_id: 'idProprietario02', system_id: 'sysOficinaCarros' },
  { name: 'Troca de amortecedores', description: 'Substituição dos amortecedores para garantir uma condução suave e estável, além de manter o controle do veículo.', productType_id: 'service', user_id: 'idProprietario02', system_id: 'sysOficinaCarros' },
  { name: 'Troca de bateria', description: 'Substituição da bateria antiga por uma nova para garantir um funcionamento confiável do sistema elétrico do veículo.', productType_id: 'service', user_id: 'idProprietario02', system_id: 'sysOficinaCarros' },
  { name: 'Reparo de suspensão', description: 'Reparo ou substituição de componentes da suspensão danificados para garantir um passeio confortável e estável.', productType_id: 'service', user_id: 'idProprietario02', system_id: 'sysOficinaCarros' },
  { name: 'Diagnóstico de problemas', description: 'Identificação e resolução de problemas mecânicos, elétricos ou eletrônicos por meio de testes e análises especializadas.', productType_id: 'service', user_id: 'idProprietario02', system_id: 'sysOficinaCarros' },
  { name: 'Troca de fluidos', description: 'Substituição de fluidos do veículo, como líquido de arrefecimento, fluido de transmissão, fluido de direção hidráulica, etc., para manter os sistemas funcionando corretamente.', productType_id: 'service', user_id: 'idProprietario02', system_id: 'sysOficinaCarros' },
  ];

async function main() {
  for (const productData of productsData) {
    await prisma.products.create({
      data: productData,
    });
  }
  console.log('productsSeed - OK');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
