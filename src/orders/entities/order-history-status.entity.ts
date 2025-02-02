import { OrderStatus } from '@prisma/client';

export class OrderStatusHistory {
  id: string;
  orderId: string;
  status: OrderStatus;
  changedAt: Date;
}
