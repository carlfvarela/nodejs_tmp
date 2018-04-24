"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const BodyParser = require("body-parser");
function init() {
    const app = Express();
    app.use(BodyParser.urlencoded({ extended: true }));
    app.use(BodyParser.json());
    return app;
}
exports.init = init;
;
