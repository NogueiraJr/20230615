import { FastifyRequest } from 'fastify';
import { _createOperation } from '../../repository/operation/createOperation';

export async function createOperation(request: FastifyRequest) {
  try {
    const operation = await _createOperation(request);
    const operationSummary = {
      description: operation?.description,
      notes: operation?.notes,
      priceActions: operation?.priceActions,
      priceCharged: operation?.priceCharged,
      userId: operation?.userId,
      systemId: operation?.systemId,
      tags: operation?.tags
    };

    return operationSummary;

  } catch (error) {
    throw error;
  } finally {
  }
  

}
