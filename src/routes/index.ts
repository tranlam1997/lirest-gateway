import { Application } from 'express';
import customerRoutes from './customer.route';
import emailRoutes from './email.route';

export default function routes(app: Application) {
  customerRoutes(app);
  emailRoutes(app);
}