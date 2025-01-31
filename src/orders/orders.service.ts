import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [];

  createOrder(order) {
    this.orders.push(order);
    return order;
  }

  getAllOrders() {
    return this.orders;
  }
}
