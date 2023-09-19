// userController.ts
import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

const prisma = new PrismaClient();

interface UserPayload {
  userTypeId: string;
  name: string;
}

import { Users } from '@prisma/client';

// Função para criar um usuário
export const createUserHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { userTypeId, name } = request.body as UserPayload; // Aqui, estamos usando a interface UserPayload
    const user = await prisma.users.create({
      data: {
        userTypeId,
        name,
      },
      include: {
        emails: true,
        phones: true,
        userSystemMenuModule: true,
        userType: true,
      },
    });
    reply.send(user);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Erro ao criar usuário.' });
  }
};

// Função para listar todos os usuários
export const getUsersHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const users = await prisma.users.findMany({
      include: {
        emails: true,
        phones: true,
        userSystemMenuModule: true,
        userType: true,
      },
    });
    reply.send(users);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Erro ao listar usuários.'});
  }
};

// Função para obter um usuário por ID
export const getUserHandler = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  const { id } = request.params;
  try {
    const user = await prisma.users.findUnique({
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
    reply.send(user);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Erro ao buscar usuário.' });
  }
};

// Função para atualizar um usuário por ID
export const updateUserHandler = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  const { id } = request.params;
  const { userTypeId, name } = request.body as UserPayload;
  try {
    const user = await prisma.users.update({
      where: { id },
      data: { userTypeId, name },
      include: {
        emails: true,
        phones: true,
        userSystemMenuModule: true,
        userType: true,
      },
    });
    reply.send(user);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Erro ao atualizar usuário.' });
  }
};

// Função para excluir um usuário e seus registros relacionados
export const deleteUserHandler = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  let user: Users | null = null;

  try {
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

    reply.send(user); // Responde com os dados do usuário excluído
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Erro ao excluir usuário.' });
  }
};
