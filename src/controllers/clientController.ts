import { FastifyRequest, FastifyReply } from 'fastify';
import { getClient, getUserClientId } from "../business/client/getClient";
import { errorHandler } from '../errors/errorHandler';
import { IGetClientBody } from '../interfaces/request/IGetClientBody';
import { IGetUserClientIdBody } from '../interfaces/request/IGetUserClientIdBody';

export const getClientHandler = async (request: FastifyRequest<{ Body: IGetClientBody }>, reply: FastifyReply) => {
  try {
    const client = await getClient(request, reply);
    reply.status(200).send(client);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};

export const getUserClientIdHandler = async (request: FastifyRequest<{ Body: IGetUserClientIdBody }>, reply: FastifyReply) => {
  try {
    const userClientId = await getUserClientId(request, reply);
    reply.status(200).send(userClientId);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
