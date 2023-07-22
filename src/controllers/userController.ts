import { PrismaClient } from '@prisma/client';
import { createUserSchema, updateUserSchema } from '../schemas/userSchema';
import { UserNotFoundError } from '../errors/userErrors';
import { FastifyRequest, FastifyReply } from 'fastify';

const prisma = new PrismaClient();

interface Params {
    id: string;
}

export const getUsersHandler = async () => {
  const users = await prisma.users.findMany({
    include: {
      emails: true,
      // Inclui o campo 'userType' e todas as suas informações associadas
      userType: true,
    },
  });
  return { users };
};

export const createUserHandler = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const { name, emails, userTypeId } = createUserSchema.parse(req.body);

    const newUser = await prisma.users.create({
      data: {
        name,
        emails: {
          create: emails,
        },
        // Inclua o campo 'userType' referenciando o 'userTypeId' fornecido
        userType: {
          connect: { id: userTypeId },
        },
      },
      include: {
        emails: true,
        // Inclui o campo 'userType' e todas as suas informações associadas
        userType: true,
      },
    });

    return res.status(201).send({ users: newUser });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export const updateUserHandler = async (req: FastifyRequest<{ Params: Params }>, res: FastifyReply) => {
  try {
    const { id } = req.params;
    const { name, emails, userTypeId } = updateUserSchema.parse(req.body);

    const existingUser = await prisma.users.findUnique({ where: { id } });

    if (!existingUser) {
      throw new UserNotFoundError('Usuário não encontrado.');
    }

    const updatedUser = await prisma.users.update({
      where: {
        id,
      },
      data: {
        name,
        emails: {
          deleteMany: {}, // Deleta todos os e-mails associados ao usuário
          create: emails, // Utiliza o array de e-mails diretamente para criar os novos e-mails associados ao usuário
        },
        // Atualiza o campo 'userType' para o tipo especificado pelo userTypeId
        userType: {
          connect: { id: userTypeId },
        },
      },
      include: {
        emails: true, // Inclui os e-mails associados ao usuário na resposta
        userType: true, // Inclui o tipo de usuário associado ao usuário na resposta
      },
    });

    return res.status(200).send({ users: updatedUser });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export const deleteUserHandler = async (req: FastifyRequest<{ Params: Params }>, res: FastifyReply) => {
  const { id } = req.params;

  try {
    const existingUser = await prisma.users.findUnique({ where: { id } });

    if (!existingUser) {
      throw new UserNotFoundError('Usuário não encontrado.');
    }

    // Exclui todos os e-mails associados ao usuário antes de excluí-lo
    await prisma.userEmails.deleteMany({ where: { userId: id } });

    // Exclui o usuário após excluir os e-mails associados
    await prisma.users.delete({ where: { id } });

    return res.status(200).send({ message: 'Usuário excluído com sucesso.' });
  } catch (error) {
    return res.status(400).send({ error });
  }
};
