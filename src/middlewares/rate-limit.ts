import rateLimit, { Options } from "express-rate-limit";

export function rateLimitMiddleware(options: Options) {
  return rateLimit(options);
}