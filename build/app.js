"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server = require("./config/servidor");
const Database = require("./config/database");
const config_1 = require("./config/config");
const App = require("./src");
console.log(`Running enviroment ${process.env.NODE_ENV || "dev"}`);
//Starting Application Server
const server = Server.init();
server.listen(config_1.getConfiguracaoServidor().porta, function () {
    Database.init();
    App.init(server);
});
