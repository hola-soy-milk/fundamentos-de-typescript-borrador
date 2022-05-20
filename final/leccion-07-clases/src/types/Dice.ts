export default class Dice {
  value(): number {
    return Math.floor(Math.random() * 6 + 1);
  }
}
