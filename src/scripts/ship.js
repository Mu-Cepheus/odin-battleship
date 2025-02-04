export default class Ship {
  #length;
  #hits;
  #sunk;

  constructor(argLength) {
    this.#length = argLength;
    this.#hits = 0;
    this.#sunk = false;
  }

  get length() {
    return this.#length;
  }

  get hits() {
    return this.#hits;
  }

  get sunk() {
    return this.#sunk;
  }

  hit() {
    this.#hits += 1;
    return this.#hits;
  }

  isSunk() {}
}
