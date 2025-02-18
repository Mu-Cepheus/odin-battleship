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

test("Prevent stacking ships on nodes", function () {
  let gb = new Gameboard();
  gb.createShip("carrier", [0, 0], "down");
  expect(() => gb.createShip("patrolBoat", [0, 1], "left")).toThrow("overlaps");
});
