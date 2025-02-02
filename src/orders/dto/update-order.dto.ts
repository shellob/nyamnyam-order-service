import { IsOptional, IsEnum, IsNumber, IsString } from 'class-validator';
import { OrderStatus, PaymentStatus, PaymentMethod} from '@prisma/client';

export class UpdateOrderDto {
  @IsOptional()
  @IsEnum(OrderStatus) 
  status?: OrderStatus;

  @IsOptional()
  @IsEnum(PaymentStatus)
  paymentStatus?: PaymentStatus;

  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;

  @IsOptional()
  @IsNumber()
  totalPrice?: number;

  @IsOptional()
  @IsString()
  deliveryAddress?: string;
}
