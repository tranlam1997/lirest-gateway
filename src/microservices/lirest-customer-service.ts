import type { CorsOptions } from "cors";
import type { Options } from "express-rate-limit";
import { StaticOrigin } from "../interfaces/cors.interface";

const whitelist = [];
export const LirestCustomerServiceConfig = {
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
  } as Options,
  cors: {
    origin() {
      return function (origin: string, callback: (err: Error | null, origin?: StaticOrigin) => void) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  } as CorsOptions,
}