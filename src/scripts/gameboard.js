import Ship from "./ship.js";

const bote = ["carrier", "battleship", "destroyer", "submarine", "patrolBoat"];

class Gameboard {
  #grid = [];
  #ships = {};

  //compose ships onto this class
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.#grid.push([]);
    }
  }

  get ships() {
    return this.#ships;
  }

  createShip(argType, argCoord, argDirection) {
    let shipLength, coords;
    if (bote.includes(argType)) {
      switch (argType) {
        case "carrier":
          shipLength = 5;
          break;
        case "battleship":
          shipLength = 4;
          break;
        case "destroyer":
          shipLength = 3;
          break;
        case "submarine":
          shipLength = 3;
          break;
        case "patrolBoat":
          shipLength = 2;
          break;
      }
      coords = calculatePlacement(shipLength, argCoord, argDirection);
      if (coords) {
        if (this.#ships[argType])
          throw new Error("Ship has already been instantiated");
        else {
          if (this.#isClearPath(coords)) {
            this.#ships[argType] = new Ship(shipLength, coords);
            for (const node of coords) {
              this.#grid[node[0]][node[1]] = { ship: this.#ships[argType] };
            }
            return true;
          } else {
            throw new Error("Ship overlaps with existing ship");
          }
        }
      } else {
        throw new Error("Illegal placement of ship");
      }
    } else {
      throw new Error("Invalid ship type");
    }
  }

  //check other ship locations during placement
  #isClearPath(argPath) {
    for (const node of argPath) {
      if (this.#grid[node[0]][node[1]]?.ship) return false;
    }
    return true;
  }

  get grid() {
    return this.#grid;
  }

  receiveAttack(argX, argY) {
    if (this.#grid[argX][argY]?.hit)
      throw new Error("Square has already been hit");
    else if (this.#grid[argX][argY]?.ship) {
      this.#grid[argX][argY].hit = true;
      return this.#grid[argX][argY].ship.hit();
    } else {
      this.#grid[argX][argY] = { hit: true };
      return this.#grid[argX][argY].hit;
    }
  }

  reportFleetSunk() {
    let count = 0;
    for (const ship in this.#ships) {
      if (ship.isSunk()) count += 1;
    }
    if (count >= 5) return true;
    else return false;
  }
}

function calculatePlacement(argLength, argCoord, argDirection) {
  switch (argDirection) {
    case "down":
      if (argCoord[0] + argLength < 11) {
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
      if (argCoord[1] + argLength < 11) {
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

export { Gameboard as default };
