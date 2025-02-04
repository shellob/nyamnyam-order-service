import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { KafkaService } from './kafka/kafka.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const kafkaService = app.get(KafkaService);
  app.use(new AuthMiddleware(kafkaService).use);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
