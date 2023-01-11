import config from 'config';
import { MicroservicesURLConfig } from '../interfaces/config';
import { MicroserviceName } from '../interfaces/mircroservice';
import { removePropertiesFromObject } from '../utils/obj-manipulation';

export const microservicesURLConfig = config.get<Record<string, MicroservicesURLConfig>>('microservices');

const microservicesURLInfo = new Map<MicroserviceName, Omit<MicroservicesURLConfig, 'name'>>();

Object.values(microservicesURLConfig).forEach((service: MicroservicesURLConfig) => {
  microservicesURLInfo.set(service.name, removePropertiesFromObject(service, ['name']));
})

export default microservicesURLInfo;
