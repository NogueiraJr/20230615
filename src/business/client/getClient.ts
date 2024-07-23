import { FastifyReply, FastifyRequest } from "fastify";
import { _getClientByName } from "../../repository/client/getClient";
import { IGetClientBody } from "../../interfaces/request/IGetClientBody";

export async function getClient(request: FastifyRequest<{ Body: IGetClientBody }>, reply: FastifyReply) {
  try {
    const { name } = request.body;

    if (name == undefined) return reply.status(400).send({ message: 'Nome necessário' });
    
    const client = await _getClientByName(name);

    if (!client) return reply.status(400).send({ message: 'Cliente não encontrado' });

    return {
      id: client?.id,
    };

  } catch (error) {
    throw error;
  } finally {
  }
}
