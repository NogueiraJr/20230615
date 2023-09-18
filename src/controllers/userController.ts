// userController.ts
import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface UserPayload {
  userTypeId: string;
  name: string;
}

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

// Função para excluir um usuário por ID
export const deleteUserHandler = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  const { id } = request.params;
  try {
    const user = await prisma.users.delete({
      where: { id },
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
    reply.status(500).send({ error: 'Erro ao excluir usuário.' });
  }
};
