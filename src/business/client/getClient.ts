import { FastifyReply, FastifyRequest } from "fastify";
import { _getClientByName } from "../../repository/client/getClient";

export async function getClient(name: string, reply: FastifyReply) {
  try {
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
