import { FastifyRequest } from 'fastify';
import { _createProduct } from "../../repository/item/createItem";

export async function createProduct(request: FastifyRequest) {
  try {
    const product = await _createProduct(request);
    const productSummary = {
      id: product?.id,
      name: product?.name,
      description: product?.description,
      productTypeId: product?.productTypeId,
      price: product?.price,
      tags: product?.tags,
      userId: product?.userId,
      systemId: product?.systemId,
    };

    return productSummary;

  } catch (error) {
    throw error;
  } finally {
  }
  

}
