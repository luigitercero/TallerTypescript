//tipado typescript

let bol:boolean = true;
let num:number =1.555;
let str:string = "hola";
let cad:number[] = [1,5];
let cualquer:any[] = [bol,num,str,cad];

//objetos

let obj: {nombre:string, edad:number, abilidad:string[]} ={
  nombre:"luis",
  edad:24,
  abilidad:["hablar en publico"]
}

//tipos personalizados
//buena practica colocarlo con mayuscula

type Heroe = {nombre:string, edad:number, abilidad:string[]}

let lui: Heroe ={
  nombre:"luis",
  edad:24,
  abilidad:["hablar en publico"]
}

//crear Clases

class Alumno {
  nombre:string;

  constructor(nombre:string){
    this.nombre = nombre;
  }

}

let al:Alumno = new Alumno("luis");