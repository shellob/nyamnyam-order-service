import { Injectable, NotFoundException } from '@nestjs/common';
import {PrismaService} from '../../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { plainToInstance } from 'class-transformer';
@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService){}

  async createOrder(data: CreateOrderDto) {
    const orderData = {
      userId: data.userId,
      restaurantId: data.restaurantId,
      totalPrice: data.totalPrice,
      deliveryAddress: data.deliveryAddress,
      status: data.status,
      paymentMethod: data.paymentMethod,
    };
    return this.prisma.order.create({ data: orderData });
  }
  

  async getAllOrders() {
    return this.prisma.order.findMany({
      select: {
        id: true,
        status: true,
        totalPrice: true
      }
    });
  }

  async getOrderById(id: string) {
    const order = await this.prisma.order.findUnique({
      where: {
        id: id
      },
      select: {
        id: true,
        status: true,
        totalPrice: true,
        paymentMethod: true
      }
    });

    if (!order) {
      throw new NotFoundException(`Order with id ${id} is not found`);
    }
    return order;
  }

  async updateOrder(id: string, data: UpdateOrderDto) {
    try {
      return await this.prisma.order.update({
        where: {id},
        data
      });
    } catch (error) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }
  }

  async deleteOrder(id: string) {
    try {
      return await this.prisma.order.delete({
        where: {id}
      });
    } catch (error) {
      throw new NotFoundException(`Order with id ${id} is not found`);
    }
  }


}
