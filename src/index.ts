
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
expressServer.app.use(express.static(path.join(__dirname,'frontend')));
expressServer.app.use(express.static(path.join(__dirname,'..','www','src')));

io.on('connection',(socket:SocketIO.Socket)=>{
  console.log('New socket connected');
  socket.on('message',(message:string)=>{
    console.log(message);
    io.emit('message',{message:message})
  })
})


server.listen(port)



