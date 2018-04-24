"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UsuarioSchema = new mongoose_1.Schema({
    nome: { type: String, required: [true, 'Nome é obrigatório.'] },
    dataCriacao: { type: Date, default: Date.now }
});
exports.UsuarioModel = mongoose_1.model('Usuario', exports.UsuarioSchema);
