import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [OrdersModule, ClientsModule.register([
    {
      name: 'ORDER_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'order-service',
          brokers: ['localhost:9092'],
        }, consumer: {
          groupId: 'order-consumer-group'
        }
      }
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
