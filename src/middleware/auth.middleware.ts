import {Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import axios from 'axios'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token) {
            throw new UnauthorizedException("Token is required");
        }

        try {
            console.log("🔹 Sending token for validation to User Service...");
            const response = await axios.post("http://localhost:3001/auth/validate", { token });
      
            if (!response.data.valid) {
              throw new UnauthorizedException("Invalid token");
            }
      
            next();
          } catch (error) {
            throw new UnauthorizedException("User Service error");
        }
    }
}
