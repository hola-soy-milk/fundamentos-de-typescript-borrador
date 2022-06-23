// 👇 Clases relacionadas a los dados para nuestro juego
export default class Dice {
/*
 * ❗️ Nuestra nueva propiedad `Face`, cuya definición vamos a declarar
 */
  face: Face;
  sides: number;

  constructor(sides: number = 6) {
    let value: number = Math.floor(Math.random() * sides) + 1;
    this.sides = sides;
/*
 * ❗️ Aquí asignamos nuestro `Face`
 */
    this.face = this.faceForValue(value);
  }

/*
 * ❗️ Un `Face` tiene una función llamada `value`
 */
  value(): number {
    return this.face.value();
  }

/*
 * ❗️ Basado en el número `value`, asignaremos una subclase de `Face`
 */
  private faceForValue(value: number): Face {
    switch (value) {
      case 1:
        return new OneFace();
      case 2:
        return new TwoFace();
      case 3:
        return new ThreeFace();
      case 4:
        return new FourFace();
      case 5:
        return new FiveFace();
      case 6:
        return new SixFace();
    }
  }
}

/*
 * ❗️ Agrega la clase abstracta `Face` con función abstracta `value` que retorna un `number`.
 *
 * ❗️ Agrega las seis subclases que mencionamos antes, cada una con una implementación de `value()` que retorna un valor correspondiente al número.
 *
 * ❗️ Crédito extra: Agrega `SevenFace` y `EightFace`. ¿Qué nos falta para poder usarlos?
 */