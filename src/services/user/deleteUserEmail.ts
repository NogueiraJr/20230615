import { UserEmails } from '@prisma/client';
import { prisma } from '../../controllers/userController';

export async function deleteUserEmail(userEmails: UserEmails | null, id: string) {
  try {
    await prisma.$transaction(async (tx) => {
      // Verifique se o e-mail a ser excluído pertence ao usuário
      userEmails = await tx.userEmails.findUnique({
        where: { id }
      });
    
      console.log(`userEmails: ${JSON.stringify(userEmails)}`);

      if (!userEmails) {
        throw new Error('E-mail não encontrado para o usuário');
      }
    
      // Exclua o e-mail
      await prisma.userEmails.delete({
        where: {
          id: userEmails.id,
        },
      });
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}