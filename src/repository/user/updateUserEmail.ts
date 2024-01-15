import { prisma } from '../../controllers/userController';

export async function updateUserEmail(userId: string, emailId: string, newEmail: string) {
  try {
    // Verifique se o e-mail a ser atualizado pertence ao usuário
    const existingEmail = await prisma.userEmails.findFirst({
      where: {
        id: emailId,
        userId: userId,
      },
    });
  
    if (!existingEmail) {
      throw new Error('E-mail não encontrado para o usuário');
    }
  
    // Atualize o e-mail
    const updatedEmail = await prisma.userEmails.update({
      where: {
        id: existingEmail.id
      },
      data: {
        email: newEmail,
      },
    });
  
    return updatedEmail;
    
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
