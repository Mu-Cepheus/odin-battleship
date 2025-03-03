import "./../styles.css";
import Player from "./player";
import * as ui from "./interface.js";

let leftGrid = document.querySelector("main>section:first-child");
let rightGrid = document.querySelector("main>section:nth-child(2)");

let p1 = new Player("Joe", "human");
let com = new Player("AM");

//on page load we should populate the boards
//ship populate logic should be separate to allow testing to begin
//with manual placement
p1.board.createShip("carrier", [0, 0], "down");
p1.board.createShip("battleship", [0, 2], "right");
p1.board.createShip("destroyer", [4, 4], "up");
p1.board.createShip("submarine", [7, 6], "down");
p1.board.createShip("patrolBoat", [6, 8], "left");
com.board.createShip("carrier", [0, 0], "down");
com.board.createShip("battleship", [0, 1], "down");
com.board.createShip("destroyer", [0, 2], "down");
com.board.createShip("submarine", [0, 3], "down");
com.board.createShip("patrolBoat", [0, 4], "down");

ui.renderBoard(leftGrid, p1.board.ships);
ui.renderBoard(rightGrid, com.board.ships);
