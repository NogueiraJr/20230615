import { FastifyRequest } from 'fastify';
import { _createActionItem } from '../../repository/actionItem/createActionItem';

export async function createActionItem(request: FastifyRequest) {
  try {
    const actionItem = await _createActionItem(request);
    const actionItemSummary = { id: actionItem?.id };

    return actionItemSummary;

  } catch (error) {
    throw error;
  } finally {
  }
  

}
