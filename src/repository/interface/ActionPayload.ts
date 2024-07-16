import { Decimal } from "@prisma/client/runtime/library";

export interface ActionPayload {
  userOperationId: string;
  userClientId: string;
  actionId: string;
  description: string;
  notes: string;
  scheduledAt: Date;
  executedAt: Date;
  finishedAt: Date;
  priceProducts: Decimal;
  tags: string;
}
