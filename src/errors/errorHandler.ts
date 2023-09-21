import { FastifyReply } from 'fastify';

export const errorHandler = (errorMessage: string | Error, reply: FastifyReply, statusCode: number = 500) => {
  let finalErrorMessage = errorMessage instanceof Error ? errorMessage.message : errorMessage;
  
  if (!finalErrorMessage) {
    finalErrorMessage = 'Ocorreu um erro no servidor.';
  }

  console.error(finalErrorMessage);
  reply.status(statusCode).send({ error: finalErrorMessage });
};