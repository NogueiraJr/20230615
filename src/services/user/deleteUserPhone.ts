import { prisma } from '../../controllers/userController';

export async function deleteUserPhone(userId: string, phoneId: string) {
  // Verifique se o telefone a ser excluído pertence ao usuário
  const existingPhone = await prisma.userPhones.findFirst({
    where: {
      id: phoneId,
      userId: userId,
    },
  });

  if (!existingPhone) {
    throw new Error('Telefone não encontrado para o usuário');
  }

  // Exclua o telefone
  await prisma.userPhones.delete({
    where: {
      id: existingPhone.id,
    },
  });
}