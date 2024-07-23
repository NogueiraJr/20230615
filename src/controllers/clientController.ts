import { FastifyRequest, FastifyReply } from 'fastify';
import { getClient } from "../business/client/getClient";
import { errorHandler } from '../errors/errorHandler';
import { IGetClientBody } from '../interfaces/request/IGetClientBody';

export const getClientHandler = async (request: FastifyRequest<{ Body: IGetClientBody }>, reply: FastifyReply) => {
  try {
    const client = await getClient(request, reply);
    reply.status(200).send(client);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
