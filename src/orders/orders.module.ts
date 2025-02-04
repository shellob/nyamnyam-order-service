import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import {KafkaService} from '../kafka/kafka.service';
@Module({
  imports: [PrismaModule],
  providers: [OrdersService, KafkaService],
  controllers: [OrdersController],
})
export class OrdersModule {}
