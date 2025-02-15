import Ship from "./../scripts/ship.js";

test("Check hit return value", () => {
  let bro = new Ship(2, [0, 0], "right");
  expect(bro.hit()).toBe(1);
  expect(bro.hit()).toBe(2);
});

test("Check sink return values", () => {
  let bro = new Ship(2, [0, 0], "right");
  expect(bro.isSunk()).toBe(false);
  bro.hit();
  bro.hit();
  expect(bro.isSunk()).toBe(true);
});

test("Check illegal ship construction", () => {
  expect(() => new Ship(2, [0, 0], "up")).toThrow("placement");
});

test("Check location reporting", () => {
  let bro = new Ship(2, [0, 0], "right");
  expect(bro.coords).toStrictEqual([
    [0, 0],
    [0, 1],
  ]);
});
