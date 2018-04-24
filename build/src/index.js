"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./rotas/usuario");
function init(server) {
    // INICIAR ROTAS
    usuario_1.default(server);
}
exports.init = init;
