import session from 'express-session';
import keycloak, { Keycloak, KeycloakConfig } from 'keycloak-connect';
import config from 'config';

const keycloakConfig = config.get<KeycloakConfig>('keycloak');
const memoryStore = new session.MemoryStore();

export default new keycloak({ store: memoryStore }, keycloakConfig) as Keycloak;
