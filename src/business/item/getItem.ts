import { FastifyReply, FastifyRequest } from "fastify";
import { _getItem } from "../../repository/item/getItem";
import { IGetItemBody } from "../../interfaces/request/IGetItemBody";

export async function getItem(request: FastifyRequest<{ Body: IGetItemBody }>, reply: FastifyReply) {
  try {
    const { name, itemTypeId, userId, systemId } = request.body;

    if (name == undefined) return reply.status(400).send({ message: 'Nome necessário' });
    if (itemTypeId == undefined) return reply.status(400).send({ message: 'Tipo do Produto necessário' });
    if (userId == undefined) return reply.status(400).send({ message: 'Usuário necessário' });
    if (systemId == undefined) return reply.status(400).send({ message: 'Sistema necessário' });
    
    const item = await _getItem(name, itemTypeId, userId, systemId);

    if (!item) return reply.status(400).send({ message: 'Produto não encontrado' });

    return {
      id: item?.id,
    };

  } catch (error) {
    throw error;
  } finally {
  }
}
