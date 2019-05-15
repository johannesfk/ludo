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
function debug() {
  document.getElementById("dieState").innerHTML = "Die state = " + dieActive;
}
