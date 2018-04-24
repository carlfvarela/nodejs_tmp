import * as Mongoose from 'mongoose';
import { getDatabaseConfig } from './config';

export function init() {

  Mongoose.connect(getDatabaseConfig().stringConnection, (error) => {
    if (error) {
      console.error('Erro ao conectar ao Mongo', error);
    } else {
      console.log('Conectado ao Mongo com sucesso');
    }
  });
}