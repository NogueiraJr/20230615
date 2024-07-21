import { FastifyReply, FastifyRequest } from "fastify";
import { _getProduct } from "../../repository/product/getProduct";

export async function getProduct(name: string, productTypeId: string, userId: string, systemId: string, reply: FastifyReply) {
  try {
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
