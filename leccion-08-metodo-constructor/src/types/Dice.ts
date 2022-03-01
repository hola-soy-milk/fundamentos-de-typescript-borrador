export default class DieWrapper {
  value(): number {
    let value: number = Math.floor(Math.random() * 6) + 1;
    return value;
  }
}
