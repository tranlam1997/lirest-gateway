import cors from 'cors';
import { OriginCallback, StaticOrigin } from '../interfaces/cors.interface';
import { HTTP_METHOD } from '../shared/constants/http-method';

export default function corsMiddleware(options: cors.CorsOptions) {
  return cors(options);
}

export function getCorsOptions(whitelist: string[], options: cors.CorsOptions = {}): cors.CorsOptions {
  return {
    origin() {
      return function (origin: string, callback: OriginCallback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      };
    },
    methods: Object.values(HTTP_METHOD).join(','),
    preflightContinue: false,
    optionsSuccessStatus: 204,
    ...options,
  };
}
