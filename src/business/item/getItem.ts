import { FastifyReply, FastifyRequest } from "fastify";
import { _getProduct } from "../../repository/item/getItem";
import { IGetProductBody } from "../../interfaces/request/IGetItemBody";

export async function getProduct(request: FastifyRequest<{ Body: IGetProductBody }>, reply: FastifyReply) {
  try {
    const { name, productTypeId, userId, systemId } = request.body;

    if (name == undefined) return reply.status(400).send({ message: 'Nome necessário' });
    if (productTypeId == undefined) return reply.status(400).send({ message: 'Tipo do Produto necessário' });
    if (userId == undefined) return reply.status(400).send({ message: 'Usuário necessário' });
    if (systemId == undefined) return reply.status(400).send({ message: 'Sistema necessário' });
    
    const product = await _getProduct(name, productTypeId, userId, systemId);

    if (!product) return reply.status(400).send({ message: 'Produto não encontrado' });

    return {
      id: product?.id,
    };

  } catch (error) {
    throw error;
  } finally {
  }
}
