import { prisma } from '../../controllers/userController';

export async function updateUserPhone(userId: string, phoneId: string, newPhone: string) {
  // Verifique se o telefone a ser atualizado pertence ao usuário
  const existingPhone = await prisma.userPhones.findFirst({
    where: {
      id: phoneId,
      userId: userId,
    },
  });

  if (!existingPhone) {
    throw new Error('Telefone não encontrado para o usuário');
  }

  // Atualize o telefone
  const updatedPhone = await prisma.userPhones.update({
    where: {
      id: existingPhone.id
    },
    data: {
      phone: newPhone,
    },
  });

  return updatedPhone;
}
