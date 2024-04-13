import { FastifyRequest, FastifyReply } from 'fastify';
import { getUserByLogin } from "../services/user/getUserByLogin";
import { UserPayload } from '../repository/interface/UserPayload';
import { errorHandler } from '../errors/errorHandler';

const bcrypt = require('bcryptjs');

export const getUserLoginHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { psw } = request.body as UserPayload;
    const user = await getUserByLogin(request);

    if (user.id == undefined) return reply.status(400).send({ message: 'Usuário não encontrado' });

    const validPassword = await bcrypt.compare(psw, user.psw);
    if (!validPassword) return reply.status(400).send({ message: 'Credenciais inválidas' });

    reply.status(200).send(user);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
