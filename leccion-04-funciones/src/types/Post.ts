/*
 * 👇 Definición del interfaz `Post`
 * 
 */

export default interface Post {
  id: number;
  name: string;
  handle: string;
  body: string;
  timestamp: Date;
}
