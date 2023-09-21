import { UserPhones } from '@prisma/client';
import { prisma } from '../../controllers/userController';

export async function deleteUserPhone(userPhones: UserPhones | null, id: string) {
  try {
    await prisma.$transaction(async (tx) => {
      // Verifique se o telefone a ser excluído pertence ao usuário
      userPhones = await tx.userPhones.findUnique({
        where: { id },
      });
    
      console.log(`userPhones: ${JSON.stringify(userPhones)}`);

      if (!userPhones) {
        throw new Error('Telefone não encontrado para o usuário');
      }
    
      // Exclua o telefone
      await prisma.userPhones.delete({
        where: {
          id: userPhones.id,
        },
      });
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}