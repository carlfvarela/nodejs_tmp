import * as nconf from 'nconf';
import * as path from 'path';

const configs = new nconf.Provider({
  store: {
    type: 'file',
    file: path.join(
      __dirname,
      `./env/config.${process.env.NODE_ENV || 'dev'}.json`
    )
  }
});

export interface IConfigServer {
  port: number;
}

export interface IConfigDatabase {
  stringConnection: string;
  tes: string;
}

export const getServerConfig = (): IConfigServer =>
  configs.get('server');
export const getDatabaseConfig = () =>
  configs.get('database');
