# Unidad 2, Lección 07: Clases

¡Felicidades! Has terminado la primera unidad de TypeScript IRL. Ahora verémos la segunda:

## Unidad 2: Continuar desarrollando una aplicacíon TypeScript existente

Nuestra aplicación esta vez es un juego de dados. Si te sale menos de 21, ¡ganaste! 

![Cáptura de la aplicación de jugar al 21, que muestra los cuatro dados, el valor de ganador, y el botón de tirar los dados de nuevo](https://user-images.githubusercontent.com/656318/152707507-1e6ae41f-d36f-4505-a4df-7d6d2f97dfc1.png)

> Ojo: Esta app está escrita con [Vue.js](https://vuejs.org/). Tal como en la primera unidad, no necesario completamente conocer Vue para completar este workshop. ¡Te guiaremos por todo lo necesario para triunfar!

## 🐾 Primeros Pasos

Igual que en la primera unidad, puedes echar a andar al app con los siguientes comandos:

    $ npm install
    $ npm run dev
    
Sin embargo, al tratar de abrir `http://localhost:3000`, ¡verás que nuestra app no funciona!

En `./src/App.vue`, en las lineas 6-8, podemos ver que inicializamos nuestro estado con cuatro instancias de `DieWrapper`s:

```typescript
import DieWrapper from './types/Dice'
const roll = () => Array.from({length: 4}, () => new DieWrapper());
const dice = ref(roll());
```

Y en la línea 14, vemos que un `DieWrapper` tiene una función `value()`:

```vue
   <Die v-for="die in dice" :faceValue="die.value()"/>
```

Sin embargo, si miramos en `./src/types/Dice.ts`, ¡vemos que está vacio!

### ¿Cómo se ven las clases en TypeScript?

Casi igual que en JavaScript:

```typescript

class Perro {
    nombre: string;
    
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    ladrar() {
        console.log("¡Guau guau!");
    }
}
```

## 🥅 Metas

En esta lección vamos a declarar y ultilizar nuestra primera clase con TypeScript. Verémos que son muy similares a las de JavaScript.

## 🤸 Ejercicios

### 1. La clase `DiceWrapper`

En `./src/types/Dice.ts`, exportaremos una nueva clase llamada `DiceWrapper`.

Tendrá una función llamada `value` que retornará un número [al azar](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random) entre 1 y 6. ¡Tal como un dado de verdad!

Echa a andar el app con `npm run dev`. ¡Si todo salió bien podrás empezar a jugar a los dados!

## 🤔 Reflexiones

- ¿Que tipo de retorno tendrá `value()`?
