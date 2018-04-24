import * as Express from 'express';
import { PersonModel, IPersonModel } from '../modelos/person';

export default class Person {
  constructor() {}

  public async findAll(req: Express.Request, res: Express.Response) {
    try {
      const persons = await PersonModel.find();
      res.send(persons);

    } catch (error) {
      console.log(`Error: ${error}`);
      res.sendStatus(500);
    }
  }
}