import { PrismaClient } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';

export const prisma = new PrismaClient();

interface UserPayload {
  user: any;
  phone: any;
}

import { createUserPhone } from '../services/user/createUserPhone';

export const createUserPhoneHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { phone, user } = request.body as UserPayload; 
    const ret = await createUserPhone(phone, user);
    reply.send(ret);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Erro ao criar Telefone do usuário.' });
  }
};

