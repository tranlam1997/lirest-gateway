import session from 'express-session';
import keycloak, { Keycloak, KeycloakConfig } from 'keycloak-connect';
import config from 'config';
import { IKeycloakConfig } from '../interfaces/config.interface';

const keycloakConfig: KeycloakConfig = config.get<IKeycloakConfig>('keycloak');
const memoryStore = new session.MemoryStore();

export default new keycloak({ store: memoryStore }, keycloakConfig) as Keycloak;
