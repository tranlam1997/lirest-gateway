import { Application } from 'express';
import { EmailService } from '../microservices'
import proxyMiddleware from '../middlewares/proxy';
import auth from '../middlewares/auth';
import corsMiddleware from '../middlewares/cors';
import rateLimitMiddleware from '../middlewares/rate-limit';

const { proxy, cors: corsConfig, rateLimit: rateLimitConfig, secureRoutes, path } = EmailService.config;

export default function customerRoute(app: Application) {
  app.use(proxyMiddleware(proxy));
  for (const key in secureRoutes) {
    secureRoutes[key].forEach((route: string) => {
      app.use(route, auth.protect(key), (_req, _res, next) => { next() });
    });
  }
  app.use(path, corsMiddleware(corsConfig), (_req, _res, next) => { next() });
  app.use(path, rateLimitMiddleware(rateLimitConfig), (_req, _res, next) => { next() });
}