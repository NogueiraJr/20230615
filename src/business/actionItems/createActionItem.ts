import { FastifyRequest } from 'fastify';
import { _createActionProduct } from '../../repository/actionItem/createActionItem';

export async function createActionProduct(request: FastifyRequest) {
  try {
    const actionProduct = await _createActionProduct(request);
    const actionProductSummary = { id: actionProduct?.id };

    return actionProductSummary;

  } catch (error) {
    throw error;
  } finally {
  }
  

}
