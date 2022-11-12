import config from 'config';
import { MicroservicesURLConfig } from '../interfaces/config.interface';
import { MicroserviceName } from '../interfaces/mircroservice.interface';
import { removePropertiesFromObject } from '../utils/obj-manipulation';

export const microservicesURLConfig = config.get<MicroservicesURLConfig[]>('microservices');

const microservicesURLInfo = new Map<MicroserviceName, Omit<MicroservicesURLConfig, 'name'>>();

microservicesURLConfig.forEach((service: MicroservicesURLConfig) => {
  microservicesURLInfo.set(service.name, removePropertiesFromObject(service, ['name']));
})

export default microservicesURLInfo;

