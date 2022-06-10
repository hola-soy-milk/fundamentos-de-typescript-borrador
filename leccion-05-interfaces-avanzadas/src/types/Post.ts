/*
 * 👇 Definición del interfaz `Post`
 * 
 * ❗️ Integremos una propiedad `sender` que reemplazará `name` y `handle`.
 */

export default interface Post {
  id: number;
  name: string;
  handle: string;
  body: string;
  timestamp: Date;
}
