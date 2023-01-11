import { Application } from 'express';
import customerRoutes from './customer';
import emailRoutes from './email';

export default function routes(app: Application) {
  customerRoutes(app);
  emailRoutes(app);
}