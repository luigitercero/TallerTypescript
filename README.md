# TallerTypescript

## ¿Qué es Typescript?

En palabras simples es un trans compilador de lenguaje de objetos a JavaScript, que es una solución de desarrollo que nos ha brindado Microsoft, la razón porque es Open Source.

## Microsoft lo llama superset

Typescript es un superset de JavaScript. Decimos que una tecnología es un superset de un lenguaje de programación, cuando puede ejecutar programas de la tecnología, Typescript en este caso, y del lenguaje del que es el superset, JavaScript en este mismo ejemplo. En resumen, esto significa que los programas de JavaScript son programas válidos de TypeScript, a pesar de que TypeScript sea otro lenguaje de programación.

Fuente:
Codigo Facilito ,Typescript<https://codigofacilito.com/articulos/typescript>

## Ventajas

* Revision de Tipado Estatico.
* Debuger.
* Diseñado para aplicaciones grandes.
* Orientada a Objetos.
* ES6.

# Requisitos

### Node && NPM

````
https://nodejs.org/en/download/package-manager/

````

### Visual Studio Code
### Type Script

````
npm i typescript -g
````
### Nodemon

Escucha los cambios en el servidor

````
npm i nodemon -d
````
### types

Es la manera que typescript entiende bibliotecas que no estran escrictas en typescript
````
npm i @types/node -d
````
### Concurrently

Funciona para ejecutar dos comandos en node.

````
npm i concurrently -d
````

### Express

````
npm i express -d
````

# Iniciar con Typescript

Al terminar la instalacion es necesario configurar el entorno de trabajo

````
tsc --init
````

gera un archivo para la configuración del entorno de desarrollo 
para esto descomentamos 
````
  - "sourceMap": true
  - "outDir": "dist/"
  - "rootDir": "src/"
````

ahora agregamos el entorno

````
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
````

# Sintaxis Básica 

## variables

````
declaracion -> let .
declaracion -> var .

variable -> declaracion nombreVariable : tipoDeVariable ; .
variable -> declaracion nombreVariable : tipoDeVariable = valor; .
````
* ejemplo:
````ts
var num = 1.555;
````

## Objetos

````
objeto -> declaracion nombreVariable : listaTipos } = listaObejtos}.

listaTipos ->  { nombreVariable : tipoDeVariable .
listaTipos ->  listaTipos, nombreVariable : tipoDeVariable .

listaObejtos -> { nombreVariable : Valor .
listaObejtos -> listaObejtos, nombreVariable : Valor .

````

* ejemplo:
```` ts
let obj: {nombre:string, edad:number, abilidad:string[]} ={
  nombre:"luis",
  edad:24,
  abilidad:["hablar en publico"]
}
````

## Crear Tipado personalizado

buena practica colocarlo con mayuscula

````
nuevoTipo -> type nombreTipo = listaTipos .



````
* ejemplo:
````ts
type Heroe = {nombre:string, edad:number, abilidad:string[]}

let lui: Heroe ={
  nombre:"luis",
  edad:24,
  abilidad:["hablar en publico"]
}

````
## Clases 

````ts
class Alumno {
  nombre:string;

  constructor(nombre:string){
    this.nombre = nombre;
  }

}

let al:Alumno = new Alumno("luis");

````
## Interfaces 

```` ts
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
````

## Herencia

````ts
class Persona {
    hablar(mensaje) {
      console.log(mensaje);
    }
}

class PersonaEducada extends Persona {
}

````

# Instalar jison 

````
npm install jison -g

````
````
jison calculator.jison

```
