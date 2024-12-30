import { FastifyRequest } from 'fastify';
import { _createItem } from "../../repository/item/createItem";

export async function createItem(request: FastifyRequest) {
  try {
    const item = await _createItem(request);
    const itemSummary = {
      id: item?.id,
      name: item?.name,
      description: item?.description,
      itemTypeId: item?.itemTypeId,
      price: item?.price,
      tags: item?.tags,
      userId: item?.userId,
      systemId: item?.systemId,
    };

    return itemSummary;

  } catch (error) {
    throw error;
  } finally {
  }
  

}
