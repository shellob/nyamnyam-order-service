import {Controller, Post, Get, Put, Delete, Param, Body, HttpException, HttpStatus} from '@nestjs/common'
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() data: CreateOrderDTO) {
    try {
      const order = await this.ordersService.createOrder(data);
      return {message: "Order created", order}
    } catch (error) {
      throw new HttpException('Error creating order', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  /*@Delete()
  async deleteOrder(@Param('id') id: string) {
    try {
      await this.ordersService.deleteOrder(id);
      return {message: 'Order deleted'};
    } catch (error) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }
  }*/
}
