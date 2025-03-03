export default class Ship {
  #length;
  #hits;
  #sunk = false;
  #coords;
  #direction;

  constructor(argLength, argCoords, argDirection) {
    this.#length = argLength;
    this.#hits = 0;
    this.#sunk = false;
    this.#coords = argCoords;
    this.#direction = argDirection;
  }

  get coords() {
    return this.#coords;
  }

  get length() {
    return this.#length;
  }

  get direction() {
    return this.#direction;
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
