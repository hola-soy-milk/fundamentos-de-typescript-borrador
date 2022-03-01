# Unidad 1, Lección 1: Instalar TypeScript en una base de código JavaScript

Te doy la bienvenida a la primera unidad! 

En esta vamos a convertir una aplicación escrita con React de JavaScript a TypeScript.

> Ojo que no es necesario completamente conocer React para este workshop. Si deseas aprender más de React, te recomiendo el [maravilloso curso de Matías en Escuela Frontend](https://www.escuelafrontend.com/react). 

## App de la Unidad 1

Nuestra app se llama "Palabras Amables". Puedo usar esta para poder anotar y acordarme de las cosas lindas que se me dicen!

![image](https://user-images.githubusercontent.com/656318/152138927-8c031cef-a2b5-4d79-87e0-b028da9514c2.png)

Fué creada con [`create-react-app`](https://create-react-app.dev/) una herramienta para autogenerar aplicaciones React.

## 🥅 Metas

En este ejercicio, vamos a instalar TypeScript en nuestro proyecto usando `npm`.

> Es importante tener en cuenta de a pesar de que podemos autogenerar una aplicación con TypeScript, el propósito aqui es añadirselo a una existente.

Tras instalar los paquetes, echa a andar la aplicación con el siguente comando:

        $ npm run dev

Miremos los paquetes que vamos a instalar:

### `typescript`

¡El paquete más importante que estamos instalando! Trae toda la funcionalidad y compilador para TypeScript.

### `@types/node`

[Definiciones de tipos](https://github.com/ramonh/ts-course-draft/tree/main/leccion-00-como-funciona-typescript#puedo-usar-librer%C3%ADas-existentes-de-javascript-con-typescript) para Node.js

### `@types/react`

[Definiciones de tipos](https://github.com/ramonh/ts-course-draft/tree/main/leccion-00-como-funciona-typescript#puedo-usar-librer%C3%ADas-existentes-de-javascript-con-typescript) para React.js

### `@types/react-dom`

[Definiciones de tipos](https://github.com/ramonh/ts-course-draft/tree/main/leccion-00-como-funciona-typescript#puedo-usar-librer%C3%ADas-existentes-de-javascript-con-typescript) para `react-dom`.

## 🤔 Reflexiones

- Instalamos TypeScript, ¿pero lo estamos usando?
- ¿Por qué tantos paquetes de `npm`?
