import * as Express from 'express';
import { TokenModel, ITokenModel } from '../modelos/token';

export default class Token {
  constructor() {}

  public async findAll(req: Express.Request, res: Express.Response) {
    try {
      const tokens = await TokenModel.find();
      res.send(tokens);

    } catch (error) {
      console.log(`Error: ${error}`);
      res.sendStatus(500);
    }
  }
}