import Gameboard from "./../scripts/gameboard.js";

test("Gameboard constructor creates boards", () => {
  let gb = new Gameboard();
  expect(gb.shipGrid.length).toBe(10);
  expect(gb.attackGrid.length).toBe(10);
});
