import Ship from "./../scripts/ship.js";

test("Check hit return value", () => {
  let bro = new Ship(2, [0, 0], [0, 1]);
  expect(bro.hit()).toBe(1);
  expect(bro.hit()).toBe(2);
});

test("Check sink return values", () => {
  let bro = new Ship(2, [0, 0], [0, 1]);
  expect(bro.isSunk()).toBe(false);
  bro.hit();
  bro.hit();
  expect(bro.isSunk()).toBe(true);
});

test("Throw error if ship occupies more points than its length", () => {
  expect(() => {
    new Ship(2, [0, 0], [0, 1], [0, 2]);
  }).toThrow("proportional coordinates");
});

test("Throw error if ship length not in prescribed range", () => {
  expect(() => {
    new Ship(1, [0, 7]);
  }).toThrow("ship length");
  expect(() => {
    new Ship(6, [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]);
  }).toThrow("ship length");
});

test("Throw error if ship has been split up into bits on the board", () => {
  expect(() => {
    new Ship(2, [0, 7], [3, 5]);
  }).toThrow("shipwreck");
});

test("Check if legalPlacements calculates correctly", () => {
  expect(Ship.getLegalPlacements(2, [0, 0])).toStrictEqual([
    [
      [0, 0],
      [1, 0],
    ],
    [
      [0, 0],
      [0, 1],
    ],
  ]);
  //DO A LENGTH 5 AND OTHER CORNERS
  expect(Ship.getLegalPlacements(5, [0, 9])).toStrictEqual([
    [
      [0, 9],
      [1, 9],
      [2, 9],
      [3, 9],
      [4, 9],
    ],
    [
      [0, 9],
      [0, 8],
      [0, 7],
      [0, 6],
      [0, 5],
    ],
  ]);
  expect(Ship.getLegalPlacements(4, [3, 2])).toStrictEqual([
    [
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
    ],
    [
      [3, 2],
      [2, 2],
      [1, 2],
      [0, 2],
    ],
    [
      [3, 2],
      [3, 3],
      [3, 4],
      [3, 5],
    ],
  ]);
});
