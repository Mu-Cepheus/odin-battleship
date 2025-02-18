import Gameboard from "./../scripts/gameboard.js";

let gb;

beforeEach(() => {
  gb = new Gameboard();
  gb.createShip("carrier", [0, 0], "down");
  gb.createShip("battleship", [0, 1], "down");
  gb.createShip("destroyer", [0, 2], "down");
  gb.createShip("submarine", [0, 3], "down");
});

afterEach(() => {
  gb = null;
});

test("Gameboard constructor creates boards", () => {
  expect(gb.grid.length).toBe(10);
});

test("Create a ship and report", () => {
  expect(gb.createShip("patrolBoat", [9, 1], "left")).toBe(true);
});

test("Prevent from creating same ship twice", () => {
  expect(() => gb.createShip("carrier", [0, 5], "right")).toThrow(
    "instantiated",
  );
});

test("Prevent stacking ships on squares", function () {
  expect(() => gb.createShip("patrolBoat", [0, 1], "left")).toThrow("overlaps");
});

test("Hitting ships", () => {
  expect(gb.receiveAttack(9, 9)).toBe(true); //miss a ship
  expect(gb.receiveAttack(1, 0)).toBe(1); //hit it
});

test("Hitting empty squares twice", () => {
  expect(gb.receiveAttack(9, 9)).toBe(true); //miss a ship
  expect(() => gb.receiveAttack(9, 9)).toThrow("already");
});

test("Reports if all ships have sunk", () => {
  gb.createShip("patrolBoat", [0, 4], "down");
});
