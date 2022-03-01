export default class DieWrapper {
  die: Die;
  sides: number;

  constructor(sides: number = 6) {
    let value: number = Math.floor(Math.random() * sides) + 1;
    this.sides = sides;
    this.die = this.dieForValue(value);
  }

  value(): number {
    return this.die.value();
  }

  private dieForValue(value: number): Die {
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
    }
  }
}