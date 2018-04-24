import * as Express from "express";
import UserController from '../controladores/user';

export default function (server: Express.Application) {
  const userController = new UserController();
  server.get('/users', userController.findAll);
  server.post('/addUser', userController.add);
}