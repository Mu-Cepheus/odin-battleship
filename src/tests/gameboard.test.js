import Gameboard from "./../scripts/gameboard.js";

test("Gameboard constructor creates boards", () => {
  let gb = new Gameboard();
  expect(gb.grid.length).toBe(10);
});

test("Create a ship and report", () => {
  let gb = new Gameboard();
  expect(gb.createShip("carrier", [0, 0], "down")).toBe(true);
  expect(gb.createShip("patrolBoat", [9, 1], "left")).toBe(true);
});

test("Prevent from creating same ship twice", () => {
  let gb = new Gameboard();
  gb.createShip("carrier", [0, 0], "down");
  expect(() => gb.createShip("carrier", [0, 5], "right")).toThrow(
    "instantiated",
  );
});

test("Prevent stacking ships on squares", function () {
  let gb = new Gameboard();
  gb.createShip("carrier", [0, 0], "down");
  expect(() => gb.createShip("patrolBoat", [0, 1], "left")).toThrow("overlaps");
});

test("Hitting ships", () => {
  let gb = new Gameboard();
  gb.createShip("carrier", [0, 0], "down");
  expect(gb.receiveAttack(0, 1)).toBe(true); //miss a ship
  expect(gb.receiveAttack(1, 0)).toBe(1); //hit it
});

test("Hitting empty squares twice", () => {
  let gb = new Gameboard();
  gb.createShip("carrier", [0, 0], "down");
  expect(gb.receiveAttack(0, 1)).toBe(true); //miss a ship
  expect(() => gb.receiveAttack(0, 1)).toThrow("already");
});

test("Reports if all ships have sunk", () => {
  let gb = new Gameboard();
  gb.createShip("carrier", [0, 0], "down");
  gb.createShip("battleship", [0, 1], "down");
  gb.createShip("destroyer", [0, 2], "down");
  gb.createShip("submarine", [0, 3], "down");
  gb.createShip("patrolBoat", [0, 4], "down");
});
