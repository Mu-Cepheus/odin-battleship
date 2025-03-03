import Player from "./../scripts/player.js";

let player;

beforeEach(() => {
  player = new Player("Nemo", "human");
});

afterEach(() => {
  player = null;
});

test("Player can utilize board methods", () => {
  player.board.createShip("carrier", [0, 0], "down");
  player.board.createShip("battleship", [0, 1], "down");
  player.board.createShip("destroyer", [0, 2], "down");
  player.board.createShip("submarine", [0, 3], "down");
  player.board.createShip("patrolBoat", [0, 4], "down");
  expect(player.board.receiveAttack(9, 9)).toBe(true);
  expect(player.board.receiveAttack(1, 0)).toBe(1);
});
