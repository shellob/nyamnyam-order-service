import {IsNotEmpty, IsString, IsNumber} from 'class-validator'
import { isStringObject } from 'util/types'
// DTO (Data Transfer Object) – отвечает за валидацию входных данных.
export class CreateOrderDTO {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    restaurantId: string;

    @IsString()
    @IsNotEmpty()
    deliveryAddress: string;

    @IsNumber()
    totalPrice: number;

}