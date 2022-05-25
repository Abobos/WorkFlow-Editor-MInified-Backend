import express, { Application } from 'express';

import morgan from 'morgan';
import cors from 'cors';

import indexRoute from './routes/index';
import { defaultErrorHandler } from './middlewares/error';

export class App {
  public app: Application;

  constructor(private port?: number) {
    this.app = express();
    this.settings();
    this.middlewares();
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 8080);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(cors());

    this.app.use(morgan('dev'));

    this.app.use(indexRoute);

    defaultErrorHandler(this.app);
  }

  getEnv() {
    return this.app.get('env');
  }

  getPort() {
    return this.app.get('port');
  }
}
