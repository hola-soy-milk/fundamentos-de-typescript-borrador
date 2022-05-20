export default class Dice {
  constructor(private sides: number) {}

  value(): number {
    let value: number = Math.floor(Math.random() * this.sides) + 1;
    return value;
  }
}
