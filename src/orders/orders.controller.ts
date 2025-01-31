import { Controller, Post, Get, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() order) {
    return this.ordersService.createOrder(order);
  }

  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }
}
