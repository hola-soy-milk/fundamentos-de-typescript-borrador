// 👇 Clases relacionadas a los dados para nuestro juego
export default class Dice {
  // 🛎 Propiedad opcional. Puede ser de tipo `Face` o `undefined`. O sea, si creamos una instancia de `Dice`, no requiere que se defina un lado.
  face?: Face;
  sides: number;

  constructor(sides: number = 6) {
    let value: number = Math.floor(Math.random() * sides) + 1;
    this.sides = sides;
    this.face = this.faceForValue(value);
  }

  value(): number {
    /* ❗️ 
     * En el caso donde `face` sea `undefined`, lanzemos un error que diga "Imposible no tener lado de dado". 
     * Lanzar un error es igual que en JavaScript:
     * 
     * ```typescript
     * throw new Error(message);
     * ```
     */

    if (this.face) {
      return this.face.value();
    }
    throw new Error("Imposible no tener lado de dado");
  }

  /* ❗️ 
   * ¡Pongámos nuestra nueva propiedad opcional en práctica!
   * 
   * Cambiemos la firma de nuestra función `faceForValue` en la línea 18:
   * 
   * ```typescript
   *   private faceForValue(value: number): Face | undefined {
   * ```
   * 
   * El valor de retorno de `faceForValue` ahora puede ser de tipo `Face` o `undefined`. Esto se llama un **tipo unión**.
   * 
   * Ahora podemos cambiarlo para que el `switch` por defecto retorne un `undefined`.
    */
  private faceForValue(value: number): Face | undefined {
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
      case 7:
        return new SevenFace();
      case 8:
        return new EightFace();
      default:
        return undefined;
    }
  }
}

abstract class Face {
  abstract value(): number;
}

class OneFace extends Face {
  value() {
    return 1;
  }
}
class TwoFace extends Face {
  value() {
    return 2;
  }
}
class ThreeFace extends Face {
  value() {
    return 3;
  }
}
class FourFace extends Face {
  value() {
    return 4;
  }
}
class FiveFace extends Face {
  value() {
    return 5;
  }
}
class SixFace extends Face {
  value() {
    return 6;
  }
}
class SevenFace extends Face {
  value() {
    return 7;
  }
}
class EightFace extends Face {
  value() {
    return 8;
  }
}
