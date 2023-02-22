import { Application } from 'express';
import userRoutes from './user.controller';

export default function routes(app: Application) {
  userRoutes(app);
}