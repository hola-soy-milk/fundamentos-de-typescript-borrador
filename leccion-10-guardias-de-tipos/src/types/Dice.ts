export default class Dice {
  face?: Face;
  sides: number;

  constructor(sides: number = 6) {
    let value: number = Math.floor(Math.random() * sides) + 1;
    this.sides = sides;
    this.die = this.faceForValue(value);
  }

  value(): number {
    return this.die.value();
  }

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
      case 7:
        return new SevenFace();
      case 8:
        return new EightFace();
      default:
        return new OneFace();
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
