//coneccion socket io
const socket = (window as any).io();


class Chat {
  static io:any;
  constructor(private cb: Function) {}
  emmitMessage(message:String){
    //edentificar el tipo de mensaje en el servidor
    Chat.io.emit('message',message);
  }
}

Chat.io = socket;

//datos recividos por el el servidor
function messageReceived (response:any) {}

//instanciar un objeto
let chat : Chat =new Chat(messageReceived);

//chat.emmitMessage('hola servidor');

let getMessage = document.querySelector("#form");
console.log(getMessage);
if (getMessage != null) {
  getMessage.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    const message: string =(document.querySelector("#message") as HTMLInputElement).value;
    chat.emmitMessage(message);
    return false;
  })
}else {
  console.log("estoy recibiendo un mensaje vacio")
}
