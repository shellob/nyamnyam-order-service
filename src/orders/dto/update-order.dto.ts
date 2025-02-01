import { IsOptional, IsEnum, IsNumber, IsString } from 'class-validator';
import { OrderStatus, PaymentStatus} from '@prisma/client';

export class UpdateOrderDto {
  @IsOptional()
  @IsEnum(OrderStatus) 
  status?: OrderStatus;

  @IsOptional()
  @IsEnum(PaymentStatus)
  paymentStatus?: PaymentStatus;

  @IsOptional()
  @IsNumber()
  totalPrice?: number;

  @IsOptional()
  @IsString()
  deliveryAddress?: string;
}
