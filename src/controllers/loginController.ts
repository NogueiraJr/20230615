// import { generateAccessToken } from '../utils/jwt';
import { FastifyRequest, FastifyReply } from 'fastify';
import { getUserByLogin } from "../services/user/getUserByLogin";
import { UserPayload } from '../repository/interface/UserPayload';

const bcrypt = require('bcryptjs');

export const getUserLoginHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const { psw } = request.body as UserPayload;
  const user = await getUserByLogin(request);

  if (!user) return reply.status(400).send({ message: 'Usuário não encontrado' });

  const validPassword = await bcrypt.compare(user.psw, psw);
  if (!validPassword) return reply.status(400).send({ message: 'Credenciais inválidas' });

//   const accessToken = generateAccessToken({ id: user.id, usr: user.usr });
  reply.status(201).send(user);
};
