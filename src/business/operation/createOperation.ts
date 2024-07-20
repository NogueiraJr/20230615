import { FastifyRequest } from 'fastify';
import { _createOperation } from '../../repository/operation/createOperation';

export async function createOperation(request: FastifyRequest) {
  try {
    const operation = await _createOperation(request);
    const operationSummary = { id: operation?.id };

    return operationSummary;

  } catch (error) {
    throw error;
  } finally {
  }
  

}
