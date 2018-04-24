"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nconf = require("nconf");
const path = require("path");
//Read Configurations
const configs = new nconf.Provider({
    store: {
        type: 'file',
        file: path.join(__dirname, `./env/config.${process.env.NODE_ENV || 'dev'}.json`)
    }
});
exports.getConfiguracaoServidor = () => configs.get('servidor');
exports.getConfiguracaoBancoDados = () => configs.get('bancoDados');
