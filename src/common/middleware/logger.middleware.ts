// https://docs.nestjs.com/middleware
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('LoggerMiddleware - req: ', req);
    console.log('LoggerMiddleware - res: ', res);
    next();
  }
}
