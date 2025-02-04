import Ship from "./../scripts/ship.js";

let bro = new Ship(2);

test("Check hit return value", () => {
  expect(bro.hit()).toBe(1);
  expect(bro.hit()).toBe(2);
});
