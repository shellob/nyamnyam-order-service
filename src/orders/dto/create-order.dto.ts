import { IsEnum, IsNumber, IsString } from 'class-validator';
import { OrderStatus, PaymentMethod, PaymentStatus } from '@prisma/client';

export class CreateOrderDto {
  @IsString()
  userId: string;

  @IsString()
  restaurantId: string;

  @IsNumber()
  totalPrice: number;

  @IsString()
  deliveryAddress: string;

  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsEnum(PaymentStatus)
  paymentStatus: PaymentStatus;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;
}
