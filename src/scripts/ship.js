export default class Ship {
  #length;
  #hits;
  #sunk = false;
  #coords;

  constructor(argLength, argCoord, argDirection) {
    if (argLength > 5 || argLength < 2) throw new Error("Invalid ship length");
    this.#coords = calculatePlacement(argLength, argCoord, argDirection);
    if (this.#coords === false) throw new Error("Illegal placement of ship");
    this.#length = argLength;
    this.#hits = 0;
    this.#sunk = false;
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

function calculatePlacement(argLength, argCoord, argDirection) {
  switch (argDirection) {
    case "down":
      if (argCoord[0] + argLength < 10) {
        let path = [argCoord];
        for (let i = 1; i < argLength; i++) {
          path.push([argCoord[0] + i, argCoord[1]]);
        }
        return path;
      } else return false;
    case "up":
      if (argCoord[0] - argLength > -2) {
        let path = [argCoord];
        for (let i = 1; i < argLength; i++) {
          path.push([argCoord[0] - i, argCoord[1]]);
        }
        return path;
      } else return false;
    case "right":
      if (argCoord[1] + argLength < 10) {
        let path = [argCoord];
        for (let i = 1; i < argLength; i++) {
          path.push([argCoord[0], argCoord[1] + i]);
        }
        return path;
      } else return false;
    case "left":
      if (argCoord[1] - argLength > -2) {
        let path = [argCoord];
        for (let i = 1; i < argLength; i++) {
          path.push([argCoord[0], argCoord[1] - i]);
        }
        return path;
      } else return false;
  }
}
