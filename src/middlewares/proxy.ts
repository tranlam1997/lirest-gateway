import { createProxyMiddleware, Options } from "http-proxy-middleware";
import config from "config";
import { Application } from "express";
import { IMicroservicesConfig } from "../interfaces/config.interface";

const microservices = config.get<IMicroservicesConfig[]>("microservices");

export default function proxy(app: Application) {
  microservices.forEach((service: IMicroservicesConfig) => {
    const options: Options = {
      target: `${service.protocol}://${service.host}:${service.port}`,
      changeOrigin: true,
  }
    app.use(service.path, createProxyMiddleware(options));
  })
}