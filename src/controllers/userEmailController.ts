import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

import { errorHandler } from '../errors/errorHandler';

export const prisma = new PrismaClient();

interface UserPayload {
  user: any;
  email: any;
  userId: any;
  emailId: any;
  newEmail: any;
}

import { createUserEmail } from '../services/user/createUserEmail';
import { updateUserEmail } from '../services/user/updateUserEmail';
import { deleteUserEmail } from '../services/user/deleteUserEmail';

export const createUserEmailHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { email, user } = request.body as UserPayload; 
    const ret = await createUserEmail(email, user);
    reply.send(ret);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};

export const updateUserEmailHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { userId, emailId, newEmail } = request.body as UserPayload;
    const updatedEmail = await updateUserEmail(userId, emailId, newEmail);
    reply.send(updatedEmail);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};

export const deleteUserEmailHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { userId, emailId } = request.body as UserPayload;
    await deleteUserEmail(userId, emailId);
    reply.send({ message: 'Email apagado com sucesso' });
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};