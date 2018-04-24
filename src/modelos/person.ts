import * as Mongoose from "mongoose";
import { Schema, Document, model } from 'mongoose';

export interface IPersonModel extends Document {
  user: Mongoose.Schema.Types.ObjectId;
  name: string;
  nif: number;
  birthdate: Date;
  phoneNumber: string;
}

export const PersonSchema = new Schema({
  name: { type: String, required: [true, 'Nome é obrigatório.'] },
  nif: { type: Number, required:true},
  phoneNumber: { type: String, required:true},
  birthdate: { type: Date, default: Date.now }
});


export const PersonModel = model<IPersonModel>('Person', PersonSchema);

