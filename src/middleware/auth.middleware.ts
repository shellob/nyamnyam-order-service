import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { KafkaService } from "src/kafka/kafka.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly kafkaService: KafkaService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            throw new UnauthorizedException("Token is required");
        }

        try {
            console.log("Sending token for validation:", token);
            await this.kafkaService.sendMessage("jwt-validation", {token});

            next()
        } catch (error) {
            throw new UnauthorizedException("Kafka error");
        }
    }
}