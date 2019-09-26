import express = require('express');

export default class Server{
  public app:express.Application;  
  private port: number;
    
  constructor(port:number){
      this.port =port;
      this.app =express();
  }

    start(callback?: ()=>void){
        this.app.listen(this.port,callback);
        console.log("hola aqui");
        console.log("hola alla");
    }
    static init(port:number):Server{
        return new Server(port);
    }
  }