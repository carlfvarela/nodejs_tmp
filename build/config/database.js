"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const config_1 = require("./config");
function init() {
    Mongoose.connect(config_1.getConfiguracaoBancoDados().stringConexao, (error) => {
        if (error) {
            console.error('Erro ao conectar ao Mongo', error);
        }
        else {
            console.log('Conectado ao Mongo com sucesso');
        }
    });
}
exports.init = init;
