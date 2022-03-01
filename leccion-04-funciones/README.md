# Unidad 1, Lección 4: Funciones

Ahora le agregaremos tipos a nuestras funciones en TypeScript!

Tal como podemos declarar variables con tipos, lo mismo se puede hacer con funciones.

## 🐾 Primeros Pasos

Cáda parametro de una función puede definirse con un tipo. Por ejemplo:

```typescript
const publicarAdicion = (x: number, y: number) => {
    console.log(x + y);
};
```

No sólo eso, pero también permiten definir un tipo de retorno, y con esto asegurar que la función nos da lo que dice:

```typescript
const adicion = (x: number, y: number): number => x + y;
```

Pero ¿qué pasa cuando no definimos un tipo de retorno? En JavaScript, una función que no devuelve nada en realidad devuelve `undefined`. En TypeScript, es casi lo mismo:

```typescript
console.log(typeof publicarAdicion(1, 2))); // => undefined
```

Sin embargo, `undefined` es un valor, no un tipo! En este caso, podemos definir el tipo de retorno de una función que no devuelve nada como `void`:

```typescript
const publicarAdicion = (x: number, y: number): void => {
    console.log(x + y);
};
```

Esta definición de `publicarAdicion` es equivalente a la anterior.

## 🥅 Metas

En esta lección, vamos a:
- Definir nuestra primera función con TypeScript
- Agregar declaraciones de tipos a funciones

## 🤸 Ejercicios

### 1. Nueva función de utilidad

En `./src/components/PostList.tsx`, en la línea 3, importamos la función `formatPostTimestamp`:

```typescript
import formatPostTimestamp from '../utils/formatters'
```

Y la usamos en la línea 11:

```typescript
<p className="small right">{formatPostTimestamp(post)}</p>
```

Agreguemos en el nuevo archivo `./src/utils/formatters.ts`. Tendrá una función formatPostTimestamp:

- Toma como argumento un `post` de tipo `Post`
- Retorna un `Date` formatteado: `return new Date(post.timestamp).toLocaleString("es");`

### 3. Darle tipos a los argumentos de la función anónima

Volvamos a `./src/components/PostList.tsx`, donde encontraremos una función anónima en la linea 7:

```typescript
let rows = posts.map((post, index) => {
```

¡Introduzcamos tipos para los argumentos!

### Crédito extra: Prop Types

En la línea 5, definimos nuestro componente con propiedades como un objeto:

```typescript
function PostList({posts}) {
```

Extraigamos un interfaz local para los `Props` que tengan como propediad un arreglo de `posts`.

## 🤔 Reflexiones

- ¿Qué tipo de retorno tendrá `formatPostTimestamp`?
