import express from 'express';
import config from 'config';
import routes from '../routes';
import { requestTracingMiddleware } from '../middlewares/request-tracing';
import { expressLogger, logger } from '../common/winston';

export default (() => {
  const app = express();
  const port = config.get<number>('service.port');
  app.use(requestTracingMiddleware())
  app.use(expressLogger);
  app.get('/', (_req, res) => {
    res.send('Hello World!')})
  routes(app);

  app.listen(port, () => {
    logger('main').info(`Server is running on port ${port}`);
  });
})();
