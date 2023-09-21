import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

import { errorHandler } from '../errors/errorHandler';

export const prisma = new PrismaClient();

interface UserPayload {
  user: any;
  phone: any;
  userId: any;
  phoneId: any;
  newPhone: any;
}

import { createUserPhone } from '../services/user/createUserPhone';
import { updateUserPhone } from '../services/user/updateUserPhone';
import { deleteUserPhone } from '../services/user/deleteUserPhone';

export const createUserPhoneHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { phone, user } = request.body as UserPayload; 
    const ret = await createUserPhone(phone, user);
    reply.send(ret);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};

export const updateUserPhoneHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { userId, phoneId, newPhone } = request.body as UserPayload;
    const updatedPhone = await updateUserPhone(userId, phoneId, newPhone);
    reply.send(updatedPhone);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};

export const deleteUserPhoneHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { userId, phoneId } = request.body as UserPayload;
    await deleteUserPhone(userId, phoneId);
    reply.send({ message: 'Telefone apagado com sucesso' });
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
