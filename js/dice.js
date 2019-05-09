function rollDice() {
    var die = document.getElementById("die");
    var diceOut = document.getElementById("diceOut");
    var currentDiceInt = Math.floor(Math.random() * 6) + 1;
    die.innerHTML = currentDiceInt;
    diceOut.innerHTML = "You rolled "+currentDiceInt+".";
    diceHits.unshift(currentDiceInt);
    gameRound += 1;
    movePiece();
}
