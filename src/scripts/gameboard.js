import Ship from "./ship.js";

export default class Gameboard {
  #shipGrid = []; //enemy's attackGrid communicates with this
  #attackGrid = []; //this communicates with enemy shipGrid
  #ships = {};

  //compose ships onto this class
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.#shipGrid.push([]);
      this.#attackGrid.push([]);
    }
  }

  createShip(argType, argCoord, argDirection) {
    if (
      [
        "carrier",
        "battleship",
        "destroyer",
        "submarine",
        "patrolBoat",
      ].includes(argType)
    ) {
      switch (argType) {
        case "carrier":
          this.#ships.carrier = new Ship(5, argCoord, argDirection);
          return true;
        case "battleship":
          this.#ships.battleship = new Ship(4, argCoord, argDirection);
          return true;
        case "destroyer":
          this.#ships.destroyer = new Ship(3, argCoord, argDirection);
          return true;
        case "submarine":
          this.#ships.submarine = new Ship(3, argCoord, argDirection);
          return true;
        case "patrolBoat":
          this.#ships.patrolBoat = new Ship(2, argCoord, argDirection);
          return true;
      }
    } else {
      throw new Error("Invalid ship type");
    }
  }

  get shipGrid() {
    return this.#shipGrid;
  }

  get attackGrid() {
    return this.#attackGrid;
  }

  receiveAttack() {}
}
