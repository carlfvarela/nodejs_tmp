import * as Express from 'express';
import UserRoute from './routes/user';

export function init(server: Express.Application) {
  UserRoute(server);
}
