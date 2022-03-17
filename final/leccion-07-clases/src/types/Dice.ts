export default class DieWrapper {
  value(): number {
    return Math.floor(Math.random() * 6 + 1);
  }
}
