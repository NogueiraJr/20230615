import { Decimal } from "@prisma/client/runtime/library";

export interface ItemPayload {
  id: any;
  name: string;
  description: string;
  itemTypeId: string;
  price: Decimal;

  tags: string;

  userId: string;
  systemId: string;

}
