function translateCoordinate(argX, argY) {
  let operand1 = argX * 10;
  let operand2 = argY + 1;
  return operand1 + operand2;
}

function styleDiv(argDiv, argNum, argLength, argDirection) {
  argDiv.style.background = "rgba(0,0,255,.05)";
  if (argNum === 0) {
    switch (argDirection) {
      case "up":
        Object.assign(argDiv.style, {
          "border-bottom": "2px solid blue",
          "border-left": "2px solid blue",
          "border-right": "2px solid blue",
        });
        break;
      case "down":
        Object.assign(argDiv.style, {
          "border-top": "2px solid blue",
          "border-left": "2px solid blue",
          "border-right": "2px solid blue",
        });
        break;
      case "left":
        Object.assign(argDiv.style, {
          "border-top": "2px solid blue",
          "border-bottom": "2px solid blue",
          "border-right": "2px solid blue",
        });
        break;
      case "right":
        Object.assign(argDiv.style, {
          "border-top": "2px solid blue",
          "border-bottom": "2px solid blue",
          "border-left": "2px solid blue",
        });
        break;
    }
    argDiv.style.border = "2px solid blue";
  } else if (argNum === argLength - 1) {
    switch (argDirection) {
      case "up":
        Object.assign(argDiv.style, {
          "border-top": "2px solid blue",
          "border-left": "2px solid blue",
          "border-right": "2px solid blue",
        });
        break;
      case "down":
        Object.assign(argDiv.style, {
          "border-bottom": "2px solid blue",
          "border-left": "2px solid blue",
          "border-right": "2px solid blue",
        });
        break;
      case "left":
        Object.assign(argDiv.style, {
          "border-top": "2px solid blue",
          "border-bottom": "2px solid blue",
          "border-left": "2px solid blue",
        });
        break;
      case "right":
        Object.assign(argDiv.style, {
          "border-top": "2px solid blue",
          "border-bottom": "2px solid blue",
          "border-right": "2px solid blue",
        });
        break;
    }
  } else {
    switch (argDirection) {
      case "up":
      case "down":
        Object.assign(argDiv.style, {
          "border-left": "2px solid blue",
          "border-right": "2px solid blue",
        });
        break;
      case "left":
      case "right":
        Object.assign(argDiv.style, {
          "border-top": "2px solid blue",
          "border-bottom": "2px solid blue",
        });
        break;
    }
  }
}

function renderBoard(argElement, argShips) {
  let currentDiv;
  let divNum;
  for (let ship in argShips) {
    for (let i = 0; i < argShips[ship]?.length; i++) {
      divNum = translateCoordinate(
        argShips[ship]?.coords[i][0],
        argShips[ship]?.coords[i][1],
      );
      currentDiv = argElement.querySelector(`div:nth-child(${divNum})`);
      styleDiv(
        currentDiv,
        i,
        argShips[ship]?.length,
        argShips[ship]?.direction,
      );
    }
  }
}

//get ship length and ship direction
//change color of highlight depending on length
//determine border highlights depending on direction

//RENDER THE GAMEBOARDS
//goal is given set of coordinates
//translate to nth-child()
//receive orientation (modify ship object to store orientation data)
//locate divs and highlight them based on orientation data

export { translateCoordinate, renderBoard };
