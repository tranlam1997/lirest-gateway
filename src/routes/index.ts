import config from 'config';
import { IMicroservicesConfig } from '../interfaces/config.interface';
import { removePropertiesFromObject } from '../utils/obj-manipulation';

const microservices = config.get<IMicroservicesConfig[]>('microservices');
const pathMapping = new Map<string, Omit<IMicroservicesConfig, 'path'>>();

microservices.forEach((service: IMicroservicesConfig) => {
  pathMapping.set(service.path, removePropertiesFromObject(service, ['path']));
})