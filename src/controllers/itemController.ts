import { FastifyRequest, FastifyReply } from 'fastify';
import { createItem } from "../business/item/createItem";
import { getItem } from "../business/item/getItem";
import { errorHandler } from '../errors/errorHandler';
import { IGetItemBody } from '../interfaces/request/IGetItemBody';

export const createItemHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const user = await createItem(request);
    reply.status(201).send(user);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};

export const getItemHandler = async (request: FastifyRequest<{ Body: IGetItemBody }>, reply: FastifyReply) => {
  try {
    const item = await getItem(request, reply);
    reply.status(200).send(item);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
