import Gameboard from "./../scripts/gameboard.js";

test("Gameboard constructor creates boards", () => {
  let gb = new Gameboard();
  expect(gb.shipGrid.length).toBe(10);
  expect(gb.attackGrid.length).toBe(10);
});

test("Create a ship and report", () => {
  let gb = new Gameboard();
  expect(gb.createShip("carrier", [0, 0], "down")).toBe(true);
});
