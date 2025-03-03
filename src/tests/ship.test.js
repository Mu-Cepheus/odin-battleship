import Ship from "./../scripts/ship.js";

let bro;

beforeEach(() => {
  bro = new Ship(
    2,
    [
      [0, 0],
      [0, 1],
    ],
    "right",
  );
});

afterEach(() => {
  bro = null;
});

test("Check hit return value", () => {
  expect(bro.hit()).toBe(1);
  expect(bro.hit()).toBe(2);
});

test("Check sink return values", () => {
  expect(bro.isSunk()).toBe(false);
  bro.hit();
  bro.hit();
  expect(bro.isSunk()).toBe(true);
});

test("Check location reporting", () => {
  expect(bro.coords).toStrictEqual([
    [0, 0],
    [0, 1],
  ]);
});

test("Check direction reporting", () => {
  expect(bro.direction).toBe("right");
});
