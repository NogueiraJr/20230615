import { FastifyRequest, FastifyReply } from 'fastify';
import { getProduct } from "../business/product/getProduct";
import { errorHandler } from '../errors/errorHandler';

export const getProductHandler = async (request: FastifyRequest<{ Params: {name: string, productTypeId: string, userId: string, systemId: string } }>, reply: FastifyReply) => {
  try {
    const { name, productTypeId, userId, systemId } = request.params;
    const product = await getProduct(name, productTypeId, userId, systemId, reply);
    reply.status(200).send(product);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
