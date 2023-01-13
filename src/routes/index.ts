import { Application } from 'express';
import userRoutes from './user';
import emailRoutes from './email';

export default function routes(app: Application) {
  userRoutes(app);
  emailRoutes(app);
}