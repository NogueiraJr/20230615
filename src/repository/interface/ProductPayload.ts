import { Decimal } from "@prisma/client/runtime/library";

export interface ProductPayload {
  id: any;
  name: string;
  description: string;
  productTypeId: string;
  price: Decimal;

  tags: string;

  userId: string;
  systemId: string;

}
