import { createProxyMiddleware, Options } from "http-proxy-middleware";

export default function proxyMiddleware(options?: Options) {
  return createProxyMiddleware(options);
}
