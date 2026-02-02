import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Role } from '../../users/enums/role.enum';

@Injectable()
export class MockAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // This is a mock authentication middleware.
    // In a real application, you would validate a JWT or session here.
    // We'll attach a mock user to the request for demonstration purposes.
    req['user'] = {
      id: 1,
      email: 'admin@example.com',
      roles: [Role.ADMIN, Role.MODERATOR, Role.USER], // Give all roles for testing
    };
    next();
  }
}
