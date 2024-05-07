import { Decimal } from "@prisma/client/runtime/library";

export interface OperationPayload {
  description: string;
  notes: string;
  priceActions: Decimal;
  priceCharged: Decimal;
  userId: string;
  systemId: string;
  tags: string;
}
