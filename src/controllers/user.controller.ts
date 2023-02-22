import { Application } from 'express';
import { CustomerService } from '../microservices'
import proxyMiddleware from '../middlewares/proxy';
import corsMiddleware from '../middlewares/cors';
import rateLimitMiddleware from '../middlewares/rate-limit';

const { proxy, cors: corsConfig, rateLimit: rateLimitConfig, path } = CustomerService.config;

export default function userRoute(app: Application) {
  app.use(proxyMiddleware(proxy));
  app.use(path, corsMiddleware(corsConfig), (_req, _res, next) => { next() });
  app.use(path, rateLimitMiddleware(rateLimitConfig), (_req, _res, next) => { next() });
}