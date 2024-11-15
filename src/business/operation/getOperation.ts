import { FastifyReply, FastifyRequest } from "fastify";
import { _getClientByName } from "../../repository/client/getClient";
import { _getUserClientId } from "../../repository/client/getUserClient";
import { IGetOperationBody } from "../../interfaces/request/IGetOperationBody";
import { _getOperation } from "../../repository/operation/getOperation";

export async function getOperation(request: FastifyRequest<{ Body: IGetOperationBody }>, reply: FastifyReply) {
  try {
    const { id, userId, systemId } = request.body;

    // if (id == undefined) return reply.status(400).send({ message: 'Id necessário' });
    // if (userId == undefined) return reply.status(400).send({ message: 'userId necessário' });
    // if (systemId == undefined) return reply.status(400).send({ message: 'systemId necessário' });
    
    const operation = await _getOperation(id, userId, systemId);

    // if (!operation) return reply.status(400).send({ message: 'Operação não encontrada' });

    const operationSummary = operation.map((_operation) => ({
        id: _operation.id
      , userId: _operation.userId
      , systemId: _operation.systemId
      , active: _operation.active
      , description: _operation.description
      , notes: _operation.notes
      , priceActions: _operation.priceActions
      , priceCharged: _operation.priceCharged
      , tags: _operation.tags
    }));
    return operationSummary;

  } catch (error) {
    throw error;
  } finally {
  }
}
