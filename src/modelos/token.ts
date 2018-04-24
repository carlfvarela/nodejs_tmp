import * as Mongoose from "mongoose";
import { Schema, Document, model } from 'mongoose';

export interface ITokenModel extends Mongoose.Document {
    user: Mongoose.Schema.Types.ObjectId,
    created: Date;
    validThr:Date;
    hash:String;
}

export const TokenSchema = new Schema({
    hash: { type: String, required: true },
    created: { type: Date, default: Date.now },
    validThr:{ type: Date, default: Date.now }
  });


export const TokenModel = model<ITokenModel>('Token', TokenSchema);