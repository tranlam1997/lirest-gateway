import rateLimit, { Options } from "express-rate-limit";

export default function rateLimitMiddleware(options: Partial<Options>) {
  return rateLimit(options);
}