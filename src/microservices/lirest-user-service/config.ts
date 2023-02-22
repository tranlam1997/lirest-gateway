import { MicroserviceName } from '../../interfaces/mircroservice.interface';
import microservicesURLInfo from '../../utils/data-aggregation';
import { MicroserviceConfig } from '../../interfaces/config.interface';
import { getCorsOptions } from '@src/middlewares/cors';
import { getRateLimitOptions } from '@src/middlewares/rate-limit';
import { UserServiceCorsWhiteList } from './constants/cors-whitelist';


const config: MicroserviceConfig = {
  rateLimit: getRateLimitOptions(),
  cors: getCorsOptions(UserServiceCorsWhiteList),
  proxy: {
    target: `${protocol}://${host}:${port}`,
    changeOrigin: true,
  },
  ...microservicesURLInfo.get(serviceName),
};

export const UserService = { name: serviceName, config };
