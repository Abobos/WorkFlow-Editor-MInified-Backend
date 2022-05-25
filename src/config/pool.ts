import { Pool } from 'pg';

import 'dotenv/config';

import { envrionmentDetails } from './types';

import { logger } from '../utils/index';
import { envDatabaseSettings } from './db';

const env: string = process.env.NODE_ENV || 'development';

const envConfig: envrionmentDetails = envDatabaseSettings(env);
const { envVariable } = envConfig;

const config = process.env[envVariable];

const pool = new Pool({
  connectionString: config,

  ...(env === 'production' && { ssl: { rejectUnauthorized: false } })
});

pool
  .connect()
  .then(() => {
    logger.appLogger.info(`connected to ${env} database`);
  })
  .catch((e: Error) => {
    logger.appLogger.error(
      `something went wrong when connecting to ${env} database`,
      e.message
    );
  });

export default pool;
