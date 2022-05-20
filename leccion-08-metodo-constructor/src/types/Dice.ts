export default class Dice {
  value(): number {
    let value: number = Math.floor(Math.random() * 6) + 1;
    return value;
  }
}
