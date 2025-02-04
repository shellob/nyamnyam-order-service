import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [OrdersModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
