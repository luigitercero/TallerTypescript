//coneccion socket io
const socket = (window as any).io();


class Chat {
  static io:any;
  constructor(private cb: Function) {}
  emmitMessage(message:String){}
}

//datos recividos por el el servidor
function messageReceived (response:any) {}

//instanciar un objeto
let chat : Chat =new Chat(messageReceived);
