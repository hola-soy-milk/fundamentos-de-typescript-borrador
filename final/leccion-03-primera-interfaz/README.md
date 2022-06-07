# Unidad 1, Lección 3: Primera Interfaz

Y ahora, ¡empezemos a escribir TypeScript!

Una de las características más importantes que agrega TypeScript es el uso de tipos.

## 🐾 Primeros Pasos

Digamos que tenemos un tipo que se llama `type`. Podemos declarar una variable y decirle a TypeScript que esta variable sólo puede tener este tipo. Por ejemplo:

```typescript
let nombre: string = "Fernanda";
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/DYUwLgBAdg9gtgIwE4gFwQM5iQSygcwgF4IAiAMRCSgEMoATG0gbiA)!

Esta declaración, a pesar de que no parece que haga mucho, le dice al compilador de TypeScript que la variable `nombre` sólamente podrá ser un `string` y fallará si le asignamos otro tipo.

### Tipos Primitivos

Estos se verán familiares:

- `number`
- `string`
- `boolean`

### Arreglos

Existen dos maneras de declarar un Arreglo:

```typescript
const array1: number[] = [1, 2, 3];
const array2: Array<number> = [4, 5, 6];
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAhgJwXAngRgFwzAVwLYBGApggNoC6MAvDKWgDQwBMjAzOQNwBQoksiyFEywBBJKgA8uQiQB81WgBZGAVkYA2TkA)!

El segundo modo es algo que cubriremos en detalle cuando hablemos de los tipos genéricos.

### `any`

`any` es un tipo especial que le indica a TypeScript que no nos importa de que tipo sea una variable.

Si no le damos un tipo a una variable, TypeScript asume automáticamente que es `any`. Esto se llama un "Implicit Any". Por ejemplo, las siguientes dos declaraciones hacen lo mismo:

```typescript
// Explicit Any
let variable: any = { nombre: "Estéban" };

// Implicit Any
let otraVariable = { nombre: "Estéban" };
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/PTAEFEA8AcBsEsDG8AuoCCA7AngKFgKZoBuAhgE7ykBGhAXKKTqALygDeomA9gLbXkCDAETgAzigCX1JsNABfANy5cIUAElecJKgw58RUNxTlSANQpVaBVhy58BQ0KInTZCxUA)!

### Tipos Únicos

Si necesitamos declarar objetos con una estructura más compleja que las anteriores, TypeScript nos proporciona herramientas para poder definir nuestras propias estructuras.

### Interfaces

Las interfaces nos permiten declarar la estructura de la cual deberá conformar un objeto. Declaremos un interfaz para `Mascota`, por ejemplo:

```typescript
interface Mascota {
  nombre: string;
  edad: number;
  vuela: boolean;
  amistades: Mascota[];
}

let perro = {
  nombre: "Fred",
  edad: 15,
  vuela: false,
  amistades: [],
};

let gato = {
  nombre: "Calcetines",
  edad: 13,
  vuela: true,
  amistades: [perro],
};
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgLJwM4IPZjsgbwChlkRsBbAIyggC5kMwpQBzAbhOQgBM4eGIAK7VonUgDchEADZwGVbNhkQ4IccjgVgTfhAwN0WXHADaAXU4BfIkRVhkAB2hRsyALyEu5arQYAiADFaHn8AGi5efgYARgBWCMlpOQZ4GQwIRM1tXR59BgsIq047CAdWODA3T2JSHxp6ZH8AYTgZJDBQfXDIvgFkGIBmLKlZeWRmaSytHTw8g2RTZyhXcyL2IA)!

## 🥅 Metas

En esta lección vamos a declarar y ultilizar nuestra primera interfaz.

## 🤸 Ejercicios

### Exportar nuestra interfaz `Post`

Igual que con modulos ES6, con TypeScript podemos exportar definiciones, incluyendo interfaces.

Exportemos una interfaz llamada Post, con las siguentes propiedades **sin asignarles tipo**:

- `id`: El número de identificación del `Post`
- `name`: El nombre del usuario
- `handle`: El apodo del usuario
- `body`: El texto de las palabras amables
- `timestamp`: La hora y fecha en que se creó el `Post`

### Crédito extra: Tipos para las propiedades

Bueno ahora que ya tenemos nuestra interfaz con sus propiedades, ¿por qué no le agregamos definiciones de tipos a sus propiedades?

Echémosle un vistazo a `./src/App.tsx`, en la línea 23:

```typescript
setPosts([
  {
    id: posts.length + 1,
    name: "Ramón",
    handle: "hola_soy_milk",
    body: "Eres genial!",
    timestamp: new Date(),
  },
]);
```

Esto nos ayuda a deducir que tipos tendrán las propiedades. 🤔

## 🤔 Reflexiones

- ¿Por qué es que podemos declarar las propiedades del interfaz sín añadirles tipos?
