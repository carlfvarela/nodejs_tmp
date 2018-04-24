import * as Server from "./config/server";
import * as Database from "./config/database";
import { getServerConfig, getDatabaseConfig } from './config/config';
import * as App from "./src";

console.log(`Running enviroment ${process.env.NODE_ENV || "dev"}`);

//Starting Application Server
const server = Server.init();





server.listen(getServerConfig().port, function () {
  Database.init();
  App.init(server);
});