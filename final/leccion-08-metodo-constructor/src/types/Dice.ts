// 👇 Clases relacionadas a los dados para nuestro juego

/*
 * ❗️ Agreguémosle una propiedad a `Dice` llamada `sides` que será del tipo `number`.
 */
export default class Dice {
/*
 * ❗️ Agreguémosle una propiedad a `Dice` llamada `sides` que será del tipo `number`.
 *    Esta se guardara con el constructor.
 */
  constructor(private sides: number) {}

// ❗️ Crédito extra: Tratemos de cambiar la propiedad `sides` de la clase `Dice` a privada.
  value(): number {
    // ❗️ En la lección anterior habíamos programado nuestro `Dice` para que tirase al azar un número entre 1 y 6 y lo guardará en `value`. Ahora lo vamos a adaptar para que acepte entre 1 y el número de lados dados, usando la palabra clave `this`.
    let value: number = Math.floor(Math.random() * this.sides) + 1;
    return value;
  }
}