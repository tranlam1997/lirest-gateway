import express from 'express';
import { logger, expressLogger } from './middlewares/logger';
import proxy from './middlewares/proxy';
import config from 'config';
import keycloak from './middlewares/auth';

const app = express();
const port = config.get<number>('service.port');

app.use(expressLogger);
app.use(keycloak.middleware())
proxy(app);

app.listen(port, () => {
  logger('main').info(`Server is running on port ${port}`);
});