// This document is for stylistic and grafical functions
var currentPlayerColor;
function intStyle() {
  currentPlayerColor = "blue";
  document.getElementById("roundStatus").innerHTML = currentPlayerColor;
  document.getElementById("roundStatus").style.color = currentPlayerColor;

  if (currentDiceInt == undefined) {
    diceOut.innerHTML = "#";
  }
  if (currentDiceInt == undefined) {
  document.getElementById("currentPieceStatus").innerHTML = "#";
  }
}

function printRoundStatus() {
  if (currentPlayerID == 0) {
    currentPlayerColor = "blue";
  }
  if (currentPlayerID == 1) {
    currentPlayerColor = "red";
  }
  if (currentPlayerID == 2) {
    currentPlayerColor = "green";
  }
  if (currentPlayerID == 3) {
    currentPlayerColor = "yellow";
  }
  document.getElementById("roundStatus").innerHTML = currentPlayerColor;
  document.getElementById("roundStatus").style.color = currentPlayerColor;
}
function elementUpdates() {
  if (dieActive == true) {
    document.getElementById("dieState").innerHTML = "Roll the dice.";
  } else {
    document.getElementById("dieState").innerHTML = "Select piece.";
  }
  document.getElementById("currentPieceStatus").innerHTML = chosenPiece;
}
