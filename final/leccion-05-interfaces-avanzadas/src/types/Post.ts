/*
 * 👇 Definición del interfaz `Post`
 * 
 * ❗️ Integremos una propiedad `sender` que reemplazará `name` y `handle`.
 */

import { Sender } from "./Sender";

export default interface Post {
  id: number;
  body: string;
  sender: Sender
  timestamp: Date;
}
