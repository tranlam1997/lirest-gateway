import { StaticOrigin } from '../../interfaces/cors.interface';
import path from 'path';
import { MicroserviceName } from '../../interfaces/mircroservice.interface';
import microservicesURLInfo from '../../utils/data-aggregation';
import { MicroserviceConfig } from '../../interfaces/config.interface';
import { getCorsOptions } from '../../middlewares/cors';

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
  cors: getCorsOptions(whitelist),
  proxy: {
    target: `${protocol}://${host}:${port}`,
    changeOrigin: true,
  },
  ...microservicesURLInfo.get(serviceName),
};

export const CustomerService = { name: serviceName, config };
