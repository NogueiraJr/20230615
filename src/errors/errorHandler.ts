import { FastifyReply } from 'fastify';

export const errorHandler = (error: any, reply: FastifyReply) => {
  console.error(error);
  reply.status(500).send({ error: 'Ocorreu um erro no servidor.' });
};
