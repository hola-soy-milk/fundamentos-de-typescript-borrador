# Unidad 1, Lección 6: Genéricos

En esta lección nos encontramos con el próximo concepto más grande que introduce TypeScript, genéricos.

## 🐾 Primeros Pasos

### ¿Qué son los genéricos?

Si has leido o visto ejemplos de TypeScript, seguro que has visto el tipo `T`. A esto se le llama "genérico". Nos permite definir funciones, clases u otros que funcionan con cualquier tipo. Por ejemplo:

```typescript
function generico<T>(elem: T): string {
    return typeof elem;
}
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAcwKZlQJxhOAeAFQD4AKVAG1QFsAuRAgSjoGcpsxlEBvAKEX8SZUUEJiRQAngAdUcYIgrUA3DwC+QA)!

Y bueno, seguro que estaremos pensando, ¿no podemos usar un tipo `any`? ¡Sí, se puede!

```typescript
function generico(elem: any): string {
    return typeof elem;
}
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAcwKZlQJxhOAKVAG1QFsAuRAQzAE8BKCgZymzGUQG8AoRXxTVFBCYkUGgAdUcYIiKkA3FwC+QA)!

Pero supongamos un caso donde los tipos de varios argumentos pueden ser cualquiera, pero los mismos:

```typescript
function generico<T>(elem1: T, elem2: T): void {
    console.log(elem1, elem2);
}
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAcwKZlQJxhOAeAFQD4AKVAG1QFsBGALkQIBpELqAmBggSgYDc4MACaIA3gChEUxLjABnOJQB05OMjKVaLNlXbcA3OIC+QA)!

Con esta función, los siguentes funcionan sin problema:
- `generico(1, 2);`
- `generico("perro", "gato");`
- `generico(true, false);`

Pero estos no:
- `generico(1, '2');`
- `generico("perro", 4);`
- `generico(true, 'false');`

Con el uso de genéricos, podemos asegurarnos que los dos argumentos tendrán el mismo tipo.

> **Ojo**: Seguro que te hayas preguntado por qué usamos la letra `T`. ¡Es nada más que una convención! Incluso, en otros lenguajes capáz que hayas visto el uso de `G`.

## ¿Qué ha cambiado en esta lección?

¡Quizás el cambio más grande es que nuestra aplicación ahora tiene un backend!

Enfoquémosnos en el frontend, como siempre:

Ubica el nuevo archivo `./frontend/src/utils/api.ts`:

```typescript
import axios from "axios";
import Post from "../types/Post";

export async function getPosts() {
  const res = await axios.get("http://localhost:6060/posts");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
export async function postPost(post: Post) {
  await axios.post("http://localhost:6060/posts", post);
}
```

Este nos permite pedir y mandar posts del servidor.

## 🥅 Metas

En esta lección, vamos a reemplazar las funciones del módulo `api` con genéricos.

## 🤸 Ejercicios

### 1. Renombrar funciones

Si miramos en `./frontend/src/App.tsx`, podemos ver el nuevo uso esperado de la `api`:

```typescript
import { getRequest, postRequest } from './utils/api';

...

  async function fetchPosts() {
    setPosts(await getRequest<Post>("posts"));
  }

  async function submitPost(post: Post) {
    await postRequest<Post>(post, "posts");
    fetchPosts();
  }
```

Podemos ver que usamos, por ejemplo, `getRequest<Post>("posts")`, donde le pasamos lo que parece un endpoint como argumento.

También tenemos `postRequest<Post>(post, "posts")`, que nos permite pasar el post y el mismo endpoint.

En vez de tener `getPost` y `postPost` (con toda sinceridad, `postPost` no es el mejor nombre 😂), usemos estos nuevos variantes.

En `./frontend/src/utils/api.ts`, cambiemos los nombres y firmas de las funciones:

- `getPost` pasa a ser `getRequest` que es genérico `T` y acepta un argumento string `resourceURL`
- `postPost` pasa a ser `postRequest` que es genérico `T` y acepta dos argumentos: un `data` tipo `T` y un string `resourceURL`

Tambíen tendrás que modificar las funciones para que usen el `resourceURL`. 

### Crédito extra: `axios` genérico

Para hacer nuestras peticiones HTTP, usamos la librería `axios`. Esta también nos permite hacer `get` y `post` con `genéricos`. ¡Cambiémoslos!

## 🤔 Reflexiones

- ¿Podemos usar algo que no sea ni `T` ni `G` en nuestros genéricos?
- ¿Qué tipos de retorno tienen las funciones de `api`? Ojo que el `get` retorna un arreglo.
