import { FastifyRequest } from 'fastify';
import { _createAction } from '../../repository/action/createAction';

export async function createAction(request: FastifyRequest) {
  try {
    const operation = await _createAction(request);
    const actionSummary = { id: operation?.id };

    return actionSummary;

  } catch (error) {
    throw error;
  } finally {
  }
  

}
