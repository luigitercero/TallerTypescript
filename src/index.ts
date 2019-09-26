
import Server from './server/server';
import router from './router/router';
import socketIO = require('socket.io');
import http = require('http');
import express =require('express')
import path = require('path');
const port:number = 3000;
const expressServer = Server.init(port);
const server = http.createServer(expressServer.app);
const io = socketIO.listen(server);

expressServer.app.use(router);
expressServer.app.use(express.static(path.join(__dirname,'frontend')))
io.on('connection',(socket:SocketIO.Socket)=>{
  console.log("se ha conectado un cliente");
})
server.listen(port)



