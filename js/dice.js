var currentDiceInt;
function rollDice() {
  var die = document.getElementById("die");
  var diceOut = document.getElementById("diceOut");
  if (dieActive == true) {
    currentDiceInt = Math.floor(Math.random() * 6) + 1;
    die.innerHTML = currentDiceInt;
    diceOut.innerHTML = currentDiceInt;
    diceHits.unshift(currentDiceInt);
    dieActive = false;
    debug();
    printRoundStatus();
  }
}
