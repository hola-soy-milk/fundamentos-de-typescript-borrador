# Unidad 1, Lección 3: Primera Interfaz

Y ahora, ¡empezemos a escribir TypeScript!

Una de las características más importantes que agrega TypeScript es el uso de tipos.

## 🐾 Primeros Pasos

Digamos que tenemos un tipo que se llama `type`. Podemos declarar una variable y decirle a TypeScript que este variable sólo puede tener este tipo. Por ejemplo:

```typescript
let nombre: string = "Fernanda";
```

Esta declaración, a pesar de que no parece que haga mucho, le dice al compilador de TypeScript que el variable `nombre` sólamente podra ser un `string`, y fallará si le asignamos otro tipo.

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

El segundo modo es algo que cubriremos en detalle cuando hablemos de tipos genéricos.

### `any`

`any` es un tipo especial que le indica a TypeScript que no nos importa que tipo tenga un variable.

Si no le damos un tipo a un variable a una variable, TypeScript asume automáticamente que es `any`. Esto se llama un "Implicit Any". Por ejemplo, las siguientes dos declaraciones hacen lo mismo:

```typescript
// Explicit Any
let valor: any = { nombre: "Estéban" };

// Implicit Any
let valor = { nombre: "Estéban" };
```

### Tipos Únicos

Si necesitamos declarar objectos con una estructura mas compleja que las anteriores, TypeScript nos proporciona herramientas para poder definir nuestras propias

### Interfaces

Las interfaces nos permiten declarar la estructura al cual deberá conformar un objeto. Declaremos un interfaz para `Mascota`, por ejemplo:

```typescript
interface Mascota {
    nombre: string,
    edad: number,
    vuela: boolean,
    amistades: Mascota[]
}

let perro = {
    nombre: "Fred",
    edad: 15,
    vuela: false,
    amistades: []
};

let gato = {
    nombre: "Calcetines",
    edad: 13,
    vuela: true,
    amistades: [perro]
}
```

## 🥅 Metas

En esta lección vamos a declarar y ultilizar nuestra primera interfaz.

## 🤸 Ejercicios

### 1. Un nuevo tipo

En `./src/App.tsx` veremos que importamos un nuevo archivo en la línea 5:

```typescript
import Post from './types/Post';
```

¡Nuestro primer paso será crear este nuevo archivo `./src/types/Post.ts`!

### 2. Exportar nuestra interfaz `Post`

Igual que con modulos ES6, con TypeScript podemos exportar definiciones, incluyendo interfaces.

Exportemos una interfaz llamada Post, con las siguentes propiedades:

- `id`: El número de identificación del `Post`
- `name`: El nombre del usuario
- `handle`: El apodo del usuario
- `timestamp`: La hora y fecha en que se creó el `Post`

### Crédito extra: Tipos para las propiedades

Bueno ahora que ya tenemos nuestra interfaz con sus propiedades, ¿por qué no le agregamos definiciones de tipos a sus propiedades?

Echémosle un vistazo a `./src/App.tsx`, en la línea 23:

```typescript
setPosts([{
    id: posts.length + 1,
    name: "Ramón",
    handle: "hola_soy_milk",
    body: "Eres genial!",
    timestamp: new Date,
}]);
```

Esto nos ayuda a deducir que tipos tendrán las propiedades. 🤔

## 🤔 Reflexiones

- ¿Por qué es que podemos declarar las propiedades del interfaz sín añadirles tipos?

