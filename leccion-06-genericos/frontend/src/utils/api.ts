/* 👇 Utilidades de interactuar con la API de Palabras Amables
 *   y su backend.
 */

import axios from "axios";
import Post from "../types/Post";

/* ❗️ Esta función pasa a ser `getRequest` que es genérico `T` y acepta un argumento string `resourceURL` */

/* ❗️ Crédito extra: Agreguémosle un tipo de retorno a esta función. Será un `Promise` genérico con un arreglo de posts */
export async function getPosts() {

/* ❗️ Crédito extra: Para hacer nuestras peticiones HTTP, usamos la librería `axios`. 
 * Esta también nos permite hacer `get` y `post` con `genéricos`. ¡Cambiémoslos! 
 */
  const res = await axios.get("http://localhost:6060/posts");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

/* ❗️ Esta función pasa a ser `postRequest` que es genérico `T` y acepta dos argumentos: un `data` tipo `T` y un string `resourceURL` */

/* ❗️ Crédito extra: Agreguémosle un tipo de retorno a esta función. Será un `Promise` genérico con un arreglo de posts */
export async function postPost(post: Post) {

/* ❗️ Crédito extra: Para hacer nuestras peticiones HTTP, usamos la librería `axios`. 
 * Esta también nos permite hacer `get` y `post` con `genéricos`. ¡Cambiémoslos! 
 */
  await axios.post("http://localhost:6060/posts", post);
}
