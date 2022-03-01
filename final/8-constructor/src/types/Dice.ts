export default class DieWrapper {
  sides: number;

  constructor(sides: number) {
    this.sides = sides;
  }

  value(): number {
    let value: number = Math.floor(Math.random() * this.sides) + 1;
    return value;
  }
}
