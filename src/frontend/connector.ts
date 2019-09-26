//coneccion socket io
const socket = (window as any).io();
interface Messages {
  message:string
}

class Com {
  static io:any;
  constructor(private cb: Function) {
    Com.io.on('message',this.cb)
  }
  emmitMessage(message:String){
    //edentificar el tipo de mensaje en el servidor
    Com.io.emit('message',message);
  }
}

Com.io = socket;

//datos recividos por el el servidor
function messageReceived (response:Messages) {
  let parent =document.querySelector("#messages");
  let child = document.createElement("li");
  child.innerHTML = response.message;
  if (parent){
    parent.appendChild(child);
  }

}

//instanciar un objeto
let chat : Com =new Com(messageReceived);

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
