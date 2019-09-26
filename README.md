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


