import express from 'express';
import config from 'config';
import { logger } from '../middlewares//logger';
import keycloak from '../middlewares/auth';
import { expressLogger } from '../middlewares/logger';
import routes from '../routes';

(() => {
  const app = express();
  const port = config.get<number>('service.port');

  app.use(expressLogger);
  app.use(keycloak.middleware());
  routes(app);

  app.listen(port, () => {
    logger('main').info(`Server is running on port ${port}`);
  });
})();
