
import Server from './server/server';
//import router from './router/router';
var compilador = require('./compilador/compilador');

const server = Server.init(3000);
  
//server.app.use(router);
server.start(()=>console.log("server starter"));

compilador.parser.parse("2*5")