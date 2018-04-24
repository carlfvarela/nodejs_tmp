"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("../controladores/usuario");
function default_1(server) {
    const usuarioControlador = new usuario_1.default();
    server.get('/usuarios', usuarioControlador.buscarTodos);
}
exports.default = default_1;
