export default class DieWrapper {
  die?: Die;
  sides: number;

  constructor(sides: number = 6) {
    let value: number = Math.floor(Math.random() * sides) + 1;
    this.sides = sides;
    this.die = this.dieForValue(value);
  }

  value(): number {
    if (this.die instanceof Die) {
      return this.die.value();
    }
    return 0;
  }

  private dieForValue(value: number): Die | undefined {
    switch (value) {
      case 1:
        return new OneDie();
      case 2:
        return new TwoDie();
      case 3:
        return new ThreeDie();
      case 4:
        return new FourDie();
      case 5:
        return new FiveDie();
      case 6:
        return new SixDie();
      case 7:
        return new SevenDie();
      case 8:
        return new EightDie();
      default:
        return undefined;
    }
  }
}

abstract class Die {
  abstract value(): number;
}

class OneDie extends Die {
  value() {
    return 1;
  }
}
class TwoDie extends Die {
  value() {
    return 2;
  }
}
class ThreeDie extends Die {
  value() {
    return 3;
  }
}
class FourDie extends Die {
  value() {
    return 4;
  }
}
class FiveDie extends Die {
  value() {
    return 5;
  }
}
class SixDie extends Die {
  value() {
    return 6;
  }
}
class SevenDie extends Die {
  value() {
    return 7;
  }
}
class EightDie extends Die {
  value() {
    return 8;
  }
}
