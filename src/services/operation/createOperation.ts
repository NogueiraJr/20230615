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
      user_id: operation?.user_id,
      system_id: operation?.system_id,
      tags: operation?.tags
    };

    return operationSummary;

  } catch (error) {
    throw error;
  } finally {
  }
  

}
