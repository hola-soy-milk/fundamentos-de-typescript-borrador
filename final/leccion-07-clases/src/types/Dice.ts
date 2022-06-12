// 👇 Clases relacionadas a los dados para nuestro juego

/*
 * ❗️ Éxportaremos una nueva clase llamada `Dice`.
 *
 *  Tendrá una función llamada `value` que retornará un número 
 *  [al azar](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 
 *  entre 1 y 6. ¡Tal como un dado de verdad!
 */
export default class Dice {
  value(): number {
    return Math.floor(Math.random() * 6 + 1);
  }
}