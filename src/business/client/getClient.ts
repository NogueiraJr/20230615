import { FastifyReply, FastifyRequest } from "fastify";
import { _getClientByName } from "../../repository/client/getClient";
import { _getUserClientId } from "../../repository/client/getUserClient";
import { IGetClientBody } from "../../interfaces/request/IGetClientBody";
import { IGetUserClientIdBody } from "../../interfaces/request/IGetUserClientIdBody";

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

export async function getUserClientId(request: FastifyRequest<{ Body: IGetUserClientIdBody }>, reply: FastifyReply) {
  try {
    const { userId, clientId } = request.body;

    if (userId == undefined) return reply.status(400).send({ message: 'Id do Usuário necessário' });
    if (clientId == undefined) return reply.status(400).send({ message: 'Id do Cliente necessário' });
    
    const userClientId = await _getUserClientId(userId, clientId);

    if (!userClientId) return reply.status(400).send({ message: 'Id do Usuário Cliente não encontrado' });

    return {
      id: userClientId?.id,
    };

  } catch (error) {
    throw error;
  } finally {
  }
}
