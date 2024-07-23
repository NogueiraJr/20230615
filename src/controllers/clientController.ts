import { FastifyRequest, FastifyReply } from 'fastify';
import { getClient } from "../business/client/getClient";
import { errorHandler } from '../errors/errorHandler';

export const getClientHandler = async (request: FastifyRequest<{ Params: {name: string } }>, reply: FastifyReply) => {
  try {
    const { name } = request.params;
    const client = await getClient(name, reply);
    reply.status(200).send(client);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
