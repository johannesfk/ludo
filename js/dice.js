var currentDiceInt;
function rollDice() {
  var die = document.getElementById("die");
  var diceOut = document.getElementById("diceOut");
  currentDiceInt = Math.floor(Math.random() * 6) + 1;
  die.innerHTML = currentDiceInt;
  diceOut.innerHTML = currentDiceInt;
  diceHits.unshift(currentDiceInt);
  printRoundStatus();
  movePiece();
  
  // Changes current player per round
  gameRound += 1;
  if (currentPlayerID == 3) {
    currentPlayerID = 0;
  } else {
    currentPlayerID += 1;
  }
}
