import * as Express from 'express';
import { UserModel, IUserModel } from '../modelos/user';

export default class User {
  constructor() {}

  public async findAll(req: Express.Request, res: Express.Response) {
    try {
      const users = await UserModel.find();
      res.send(users);

    } catch (error) {
      console.log(`Error: ${error}`);
      res.sendStatus(500);
    }
  };

  public async add(req: Express.Request, res: Express.Response) {
    const body = req.body;
    const user = new User();
    user.email = body.email;
    user.save();

  };
}