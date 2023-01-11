import { StaticOrigin } from '../interfaces/cors';
import path from 'path';
import { MicroserviceName } from '../interfaces/mircroservice';
import microservicesURLInfo from '../utils/data-aggregation';
import { MicroserviceConfig } from '../interfaces/config';

const serviceName = path.basename(__filename).split('.')[0] as MicroserviceName;
const { protocol, host, port } = microservicesURLInfo.get(serviceName);
const whitelist: string[] = [];

const config: MicroserviceConfig = {
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
  },
  cors: {
    origin() {
      return function (
        origin: string,
        callback: (err: Error | null, origin?: StaticOrigin) => void,
      ) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      };
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
  proxy: {
    target: `${protocol}://${host}:${port}`,
    changeOrigin: true,
  },
  secureRoutes: {
    user: [],
    admin: [],
  },
  ...microservicesURLInfo.get(serviceName),
};

export const CustomerService = { name: serviceName, config };
