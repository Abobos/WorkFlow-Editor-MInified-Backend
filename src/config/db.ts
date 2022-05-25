import { envrionmentDetails } from './types';

export const envDatabaseSettings = (env: string): envrionmentDetails => {
  let config = {
    envVariable: '',
    dialect: 'postgres'
  };

  env === 'production'
    ? (config.envVariable = 'DATABASE_URL_PROD')
    : env === 'test'
    ? (config.envVariable = 'DATABASE_URL_TEST')
    : (config.envVariable = 'DATABASE_URL_DEV');

  return config;
};
