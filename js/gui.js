// This document is for stylistic and grafical functions
var currentPlayerColor;
function intStyle() {
  currentPlayerColor = "blue";
  document.getElementById("roundStatus").innerHTML = currentPlayerColor;
  document.getElementById("roundStatus").style.color = currentPlayerColor;

  if (currentDiceInt == undefined) {
    currentDiceInt = "#";
    diceOut.innerHTML = currentDiceInt;
  }
}

// FIXME: Correct program solve progress.
function printRoundStatus() {
  if (currentPlayerID == 3) {
    currentPlayerColor = "blue";
  }
  if (currentPlayerID == 0) {
    currentPlayerColor = "red";
  }
  if (currentPlayerID == 1) {
    currentPlayerColor = "green";
  }
  if (currentPlayerID == 2) {
    currentPlayerColor = "yellow";
  }
  document.getElementById("roundStatus").innerHTML = currentPlayerColor;
  document.getElementById("roundStatus").style.color = currentPlayerColor;
}
