export default class Ship {
  #length;
  #hits;
  #sunk = false;

  constructor(argLength, ...argCoords) {
    if (argCoords.length !== argLength)
      throw new Error("Ship must have proportional coordinates to length");
    if (argLength > 5 || argLength < 2) throw new Error("Invalid ship length");
    this.#length = argLength;
    this.#hits = 0;
    this.#sunk = false;
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

  static getLegalPlacements(argLength, argInitial) {
    let placements = [];
    //go down
    if (argInitial[0] + argLength < 10) {
      let path = [argInitial];
      for (let i = 1; i < argLength; i++) {
        path.push([argInitial[0] + i, argInitial[1]]);
      }
      placements.push(path);
    }
    //go up
    if (argInitial[0] - argLength > -2) {
      let path = [argInitial];
      for (let i = 1; i < argLength; i++) {
        path.push([argInitial[0] - i, argInitial[1]]);
      }
      placements.push(path);
    }
    //go right
    if (argInitial[1] + argLength < 10) {
      let path = [argInitial];
      for (let i = 1; i < argLength; i++) {
        path.push([argInitial[0], argInitial[1] + i]);
      }
      placements.push(path);
    }
    //go left
    if (argInitial[1] - argLength > -2) {
      let path = [argInitial];
      for (let i = 1; i < argLength; i++) {
        path.push([argInitial[0], argInitial[1] - i]);
      }
      placements.push(path);
    }
    return placements;
  }
}
