/* 👇 Funciones de formatear tipos
 *
 * ❗️ Exportamos la función formatPostTimestamp:
 * 
 * - Toma como argumento un `post` de tipo `Post`
 * - Retorna un `Date` formateado: `return new Date(post.timestamp).toLocaleString("es");`
 */


import Post from "../types/Post";

export function formatPostTimestamp(post: Post): string {
  return new Date(post.timestamp).toLocaleString("es");
}