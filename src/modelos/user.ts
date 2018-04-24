import { Schema, Document, model } from 'mongoose';
import { IPersonModel } from './person';

export interface IUserModel extends IPersonModel {
  email: string;
  password: string;
  createDate?: Date;
}

export const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  createDate: { type: Date, default: Date.now }

});

export const UserModel = model<IUserModel>('User', UserSchema);