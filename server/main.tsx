import express from "express";
import Socket from "./services/SocketService.tsx";
import Startup from "./Startup.tsx";
import DbContext from "./db/DbConfig.tsx";

//create server & socketServer
const app = express();
const socketServer = require("http").createServer(app);
const io = require("socket.io")(socketServer);
const port = process.env.PORT || 3000;

//Establish Socket
Socket.setIO(io);
Startup.ConfigureGlobalMiddleware(app);
Startup.ConfigureRoutes(app);

//Connect to Atlas MongoDB
DbContext.connect();

//Start Server
socketServer.listen(port, () => {
  console.log(`[SERVING ON PORT: ${port}]`);
});