import { FastifyRequest, FastifyReply } from 'fastify';
import { getUserByLogin } from "../services/user/getUserByLogin";
import { errorHandler } from '../errors/errorHandler';

const bcrypt = require('bcryptjs');

export const getUserLoginHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const user = await getUserByLogin(request, reply);
    reply.status(200).send(user);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
