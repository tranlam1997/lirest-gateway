import { MicroserviceName, MicroserviceProtocol } from "./mircroservice.interface";
import { Options as ProxyOptions } from 'http-proxy-middleware';
import { Options as RateLimitOptions } from 'express-rate-limit';
import { CorsOptions } from 'cors';

export interface MicroservicesURLConfig {
  name: MicroserviceName;
  protocol: MicroserviceProtocol;
  host: string;
  port: number;
  path: string;
}

type Role = 'admin' | 'user';

export interface MicroserviceConfig extends Omit<MicroservicesURLConfig, 'name'> {
  rateLimit: Partial<RateLimitOptions>;
  cors: Partial<CorsOptions>;
  proxy: Partial<ProxyOptions>;
  secureRoutes: Record<Role, string[]>;
}
