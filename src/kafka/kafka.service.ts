import {Injectable, OnModuleInit, OnModuleDestroy} from '@nestjs/common'
import { Kafka, Producer, Consumer } from 'kafkajs'

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
    private kafka = new Kafka({
        brokers: ["localhost:9092"]
    });

    private producer: Producer = this.kafka.producer();
    private consumer: Consumer = this.kafka.consumer({groupId: "Order-service"});

    async onModuleInit() {
        await this.producer.connect();
        await this.consumer.connect();
        await this.consumer.subscribe({topic: "jwt-validation-response", fromBeginning: true})

        this.consumer.run({
            eachMessage: async ({message}) => {
                console.log("Получен ответ от User Service: ", message.value.toString());
            }
        })
    }

    async sendMessage(topic: string, message: any) {
        await this.producer.send({
            topic,
            messages:[{value: JSON.stringify(message)}],
        });
    }

    async onModuleDestroy() {
        await this.producer.disconnect();
        await this.consumer.disconnect();
      }
}