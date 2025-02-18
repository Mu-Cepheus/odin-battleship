import Ship from "./../scripts/ship.js";

test("Check hit return value", () => {
  let bro = new Ship(2, [
    [0, 0],
    [0, 1],
  ]);
  expect(bro.hit()).toBe(1);
  expect(bro.hit()).toBe(2);
});

test("Check sink return values", () => {
  let bro = new Ship(2, [
    [0, 0],
    [0, 1],
  ]);
  expect(bro.isSunk()).toBe(false);
  bro.hit();
  bro.hit();
  expect(bro.isSunk()).toBe(true);
});

test("Check location reporting", () => {
  let bro = new Ship(2, [
    [0, 0],
    [0, 1],
  ]);
  expect(bro.coords).toStrictEqual([
    [0, 0],
    [0, 1],
  ]);
});
