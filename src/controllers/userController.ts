import { PrismaClient } from '@prisma/client';
import { createUserSchema, updateUserSchema } from '../schemas/userSchema';
import { UserNotFoundError } from '../errors/userErrors';
import { FastifyRequest, FastifyReply } from 'fastify';

const prisma = new PrismaClient();

interface Params {
    id: string;
}

export const getUsersHandler = async () => {
  const users = await prisma.user.findMany();
  return { users };
};

export const createUserHandler = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const { name, email } = createUserSchema.parse(req.body);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return res.status(201).send({ user: newUser });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export const updateUserHandler = async (req: FastifyRequest<{ Params: Params }>, res: FastifyReply) => {
  try {
    const { id } = req.params;
    const { name, email } = updateUserSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({ where: { id } });

    if (!existingUser) {
      throw new UserNotFoundError('Usuário não encontrado.');
    }

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });

    return res.status(200).send({ user });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export const deleteUserHandler = async (req: FastifyRequest<{ Params: Params }>, res: FastifyReply) => {
  const { id } = req.params;

  try {
    const existingUser = await prisma.user.findUnique({ where: { id } });

    if (!existingUser) {
      throw new UserNotFoundError('Usuário não encontrado.');
    }

    await prisma.user.delete({ where: { id } });

    return res.status(200).send({ message: 'Usuário excluído com sucesso.' });
  } catch (error) {
    return res.status(400).send({ error });
  }
};
