import { logger } from '@src/common/winston';

const ProcessLogger = logger('process');

export default function gracefulShutdown() {
  process.on('unhandledRejection', (reason, p) => {
    ProcessLogger.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
  });

  process.on('uncaughtException', async (err) => {
    ProcessLogger.error('Uncaught Exception thrown', err);
    ProcessLogger.info('Closing http server.');
    process.exit(1);
  });

  process.once('SIGINT', async () => {
      ProcessLogger.info('SIGINT signal received.');
      ProcessLogger.info('Closing http server.');
      process.exit(0);
  });

  process.once('SIGTERM', async () => {
      ProcessLogger.info('SIGTERM signal received.');
      ProcessLogger.info('Closing http server.');
      process.exit(0);
  });
}
