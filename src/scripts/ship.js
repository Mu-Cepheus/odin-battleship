export default class Ship {
  #length;
  #hits;
  #sunk;

  constructor(argLength) {
    this.#length = argLength;
    this.#hits = 0;
    this.#sunk = false;
  }

  hit() {
    this.#hits += 1;
    return this.#hits;
  }

  isSunk() {
    if (this.#hits === this.#length) return true;
    else return false;
  }
}
