# Unidad 1, Lección 6: Usando genéricos

En esta lección nos encontramos con el próximo concepto más grande que introduce TypeScript, genéricos.

## 🐾 Primeros Pasos

### ¿Qué son genéricos?

Si has leido o visto ejemplos de TypeScript, seguro que has visto el tipo `T`. Este se llama un genérico. Nos permite definir funciones, clases u otras que funcionan con cualquier tipo. Por ejemplo:

```typescript
function generico<T>(elem: T): string {
    return typeof elem;
}
```

Y bueno, seguro que estaremos pensando, ¿no podemos usar un tipo `any`? ¡Sí, se puede!

```typescript
function generico(elem: any): string {
    return typeof elem;
}
```

Pero propongamos un ejemplo donde los tipos de varios argumentos pueden ser cualquiera, pero los mismos:

```
function generico<T>(elem1: T, elem2: T): void {
    console.log(elem1, elem2);
}
```

Con esta función, invocar los siguentes funcionan sin problema:
- `generico(1, 2);`
- `generico("perro", "gato");`
- `generico(true, false);`

Pero esto no:
- `generico(1, '2');`
- `generico("perro", 4);`
- `generico(true, 'false');`

Con el uso de genéricos, podemos asegurarnos que los dos argumentos tendrán el mismo tipo.

## ¿Que ha cambiado en esta lección?

¡Quizas el cambio más grande es que nuestra aplicación ahora tiene un backend!

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

### 1. Renombrar funciónes

Crea un nuevo archivo `./src/types/Sender.ts` y exporta una nueva interfaz Sender con 3 propiedades.

🤔 ¿Cuales son?

### 2. Integra el `Sender` en el `Post`

Volvamos a `./src/types/Post.ts`, donde integraremos una propiedad `sender` que reemplazará `name` y `handle`.

### Crédito extra: Prop Types

Ahora mismo las propiedades del `Sender` son `any` de manera implícita. Qué tipos tendrán?

## 🤔 Reflexiones

- ¿Podemos combinar clases de JavaScript con interfaces?


Objetivo: Comenzar a usar tipos genericos.

En `./src/utils/api.ts`:

```
-import Post from "../types/Post";

-export async function getPosts() {
-  const res = await axios.get("http://localhost:6060/posts");
+export async function getRequest<T>(relativeUrl: string): Promise<T[]> {
+  const res = await axios.get<T[]>(`http://localhost:6060/${relativeUrl}`);
```

```
-export async function postPost(post: Post) {
-  await axios.post("http://localhost:6060/posts", post);
+export async function postRequest<T>(data: T, relativeUrl: string) {
+  await axios.post<T>(`http://localhost:6060/${relativeUrl}`, data);
```
