import * as Express from "express";
import PersonController from '../controladores/person';

export default function (server: Express.Application) {
  const personController = new PersonController();
  server.get('/person', personController.findAll);
}