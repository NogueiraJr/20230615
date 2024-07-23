import { FastifyRequest, FastifyReply } from 'fastify';
import { getProduct } from "../business/product/getProduct";
import { errorHandler } from '../errors/errorHandler';
import { IGetProductBody } from '../interfaces/request/IGetProductBody';

export const getProductHandler = async (request: FastifyRequest<{ Body: IGetProductBody }>, reply: FastifyReply) => {
  try {
    const product = await getProduct(request, reply);
    reply.status(200).send(product);
  } catch (error) {
    errorHandler(error as Error, reply);
  }
};
