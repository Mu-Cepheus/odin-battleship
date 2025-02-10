import Ship from "./ship.js";

export default class Gameboard {
  #shipGrid = []; //enemy's attackGrid communicates with this
  #attackGrid = []; //this communicates with enemy shipGrid
  #carrier;
  #battleship;
  #destroyer;
  #submarine;
  #patrolBoat;

  //compose ships onto this class
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.#shipGrid.push([]);
      this.#attackGrid.push([]);
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
