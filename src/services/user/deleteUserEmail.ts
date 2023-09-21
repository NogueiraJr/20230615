import { prisma } from '../../controllers/userController';

export async function deleteUserEmail(userId: string, emailId: string) {
  // Verifique se o e-mail a ser excluído pertence ao usuário
  const existingEmail = await prisma.userEmails.findFirst({
    where: {
      id: emailId,
      userId: userId,
    },
  });

  if (!existingEmail) {
    throw new Error('E-mail não encontrado para o usuário');
  }

  // Exclua o e-mail
  await prisma.userEmails.delete({
    where: {
      id: existingEmail.id,
    },
  });
}