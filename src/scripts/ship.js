export default class Ship {
  #length;
  #hits;
  #sunk = false;
  #coords;

  constructor(argLength, argCoords) {
    this.#length = argLength;
    this.#hits = 0;
    this.#sunk = false;
    this.#coords = argCoords;
  }

  get coords() {
    return this.#coords;
  }

  hit() {
    this.#hits += 1;
    return this.#hits;
  }

  isSunk() {
    if (this.#hits === this.#length) {
      this.#sunk = true;
      return this.#sunk;
    } else {
      return this.#sunk;
    }
  }
}
