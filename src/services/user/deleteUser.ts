import { Users } from '@prisma/client';
import { prisma } from '../../controllers/userController';

export async function deleteUser(user: Users | null, id: string, reply: any) {
  await prisma.$transaction(async (tx) => {
    // Primeiro, obtenha o usuário a ser excluído e seus registros relacionados
    user = await tx.users.findUnique({
      where: { id },
      include: {
        emails: true,
        phones: true,
        userSystemMenuModule: true,
        userType: true,
      },
    });

    if (!user) {
      reply.status(404).send({ error: 'Usuário não encontrado.' });
      return;
    }

    // Exclua os registros em UserSystemMenuModule que fazem referência ao usuário
    await tx.userSystemMenuModule.deleteMany({
      where: { userId: id },
    });

    // Em seguida, exclua os registros relacionados (emails, phones, etc.)
    await tx.userEmails.deleteMany({
      where: { userId: id },
    });

    await tx.userPhones.deleteMany({
      where: { userId: id },
    });

    // Agora, você pode excluir o próprio usuário
    await tx.users.delete({
      where: { id },
    });
  });
  return user;
}
