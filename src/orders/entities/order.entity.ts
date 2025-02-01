// Это не схема БД, а просто объект для работы с заказами.
export class Order {
    id: string;
    userId: string;
    restaurantId: string;
    totalPrice: number;
    deliveryAddress: string;
    createdAt: Date;
    updatedAt: Date;
}