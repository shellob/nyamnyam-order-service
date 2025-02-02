import { IsEnum, IsNumber, IsString, IsUUID, Min, MaxLength, Max } from 'class-validator';
import { OrderStatus, PaymentMethod, PaymentStatus } from '@prisma/client';

export class CreateOrderDto {
  @IsString()
  @IsUUID()
  userId: string;

  @IsString()
  @IsUUID()
  restaurantId: string;

  @IsNumber()
  @Min(0)
  totalPrice: number;

  @IsString()
  @MaxLength(255)
  deliveryAddress: string;

  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsEnum(PaymentStatus)
  paymentStatus: PaymentStatus;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;
}
