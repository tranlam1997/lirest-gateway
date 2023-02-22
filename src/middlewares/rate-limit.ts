import rateLimit, { Options } from "express-rate-limit";

export default function rateLimitMiddleware(options: Partial<Options>) {
  return rateLimit(options);
}

export function getRateLimitOptions(options: Partial<Options> = {}): Partial<Options> {
  return {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    ...options,
  }
}