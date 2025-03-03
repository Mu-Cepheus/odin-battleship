import Gameboard from "./gameboard.js";

class Player {
  #name;
  #type;
  #board;

  constructor(argName, argType = "computer") {
    this.#name = argName;
    this.#type = argType;
    this.#board = new Gameboard();
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get board() {
    return this.#board;
  }
}

export { Player as default };
