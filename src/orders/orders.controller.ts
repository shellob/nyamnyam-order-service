import {Controller, Post, Get, Put, Delete, Param, Body, HttpException, HttpStatus, Patch, UsePipes, ValidationPipe} from '@nestjs/common'
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createOrder(@Body() data: CreateOrderDto) {
    const order = await this.ordersService.createOrder(data);
    return {message: "Order created", order}
  }

  @Get()

  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Delete()
  async deleteOrder(@Param('id') id: string) {
      await this.ordersService.deleteOrder(id);
      return {message: 'Order deleted'};
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateOrder(@Param('id') id: string, @Body() data: UpdateOrderDto) {
    const order = await this. ordersService.updateOrder(id, data);
    return {message: "Order updated", order};
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    console.log(`Received ID: ${id}`);
    return this.ordersService.getOrderById(id);
}

}
