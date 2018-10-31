var test = 1;

function Player() {
  this.totalScore = totalScore,
  this.roundScore = roundScore,
  this.diceRollResult = diceRollResult,
  this.turnStatus = turnStatus
}

Player.prototype.rollDice = function() {
  var protoDiceResult = math.....

  if (protoDiceResult === 1) {
    this.turnStatus = false;
    console.log("sorry, your turn is over");
  } else {
    this.diceRollResult = protoDiceResult;
  }
}

Player.prototype.playerHold = function () {
  this.totalScore += this.roundScore;
  if (this.totalScore >= 100) {
    console.log("You won the game!")
  } else {
    this.turnStatus = false;
  }
}
