import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

export const prisma = new PrismaClient();

interface UserPayload {
  userTypeId: string;
  name: string;
  emails: any[];
  phones: any[];
}

import { Users } from '@prisma/client';
import { getUsers } from '../services/user/getUsers';
import { getUser } from '../services/user/getUser';
import { createUser } from '../services/user/createUser';
import { updateUser } from '../services/user/updateUser';
import { deleteUser } from '../services/user/deleteUser';

import { errorHandler } from '../errors/errorHandler';

export const createUserHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { userTypeId, name, emails, phones } = request.body as UserPayload; 
    const user = await createUser(userTypeId, name, emails, phones);
    reply.status(201).send(user);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};

export const getUsersHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const users = await getUsers();
    reply.send(users);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};

export const getUserHandler = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  const { id } = request.params;
  try {
    const user = await getUser(id);
    if (!user) {
      errorHandler('Usuário não encontrado.', reply, 404);
      return;
    }
    reply.send(user);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};

export const updateUserHandler = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  const { id } = request.params;
  const { userTypeId, name } = request.body as UserPayload;
  try {
    const user = await updateUser(id, userTypeId, name);
    reply.send(user);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};

export const deleteUserHandler = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  let user: Users | null = null;
  try {
    user = await deleteUser(user, id, reply);
    reply.send(user);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};