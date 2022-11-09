export interface IMicroservicesConfig {
  name: string;
  protocol: string;
  host: string;
  port: number;
  path: string;
}

export interface IKeycloakConfig {
  realm: string;
  resource: string;
  'auth-server-url': string;
  'ssl-required': string;
  'confidential-port': string | number;
  'bearer-only': boolean;
  credentials: {
    secret: string;
  };
}