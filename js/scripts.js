function GameGroup() {
  this.pigplayers = [],
  this.currentID = 0
}

GameGroup.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.pigplayers.push(player);
}

GameGroup.prototype.assignId = function () {
  this.currentID += 1;
  return this.currentID
}

GameGroup.prototype.turnCheck = function(player) {
  console.log(this.pigplayers.length);
  for (var i = (player.id-1); i < this.pigplayers.length; i++) {
    console.log(i);
    if (player.turnStatus === true) {
        this.pigplayers[i+1].turnStatus = true;
        console.log(this);
        return;
    }
  }
}


function Player(totalScore, roundScore, diceRollResult, turnStatus) {
  this.totalScore = totalScore,
  this.roundScore = roundScore,
  this.diceRollResult = diceRollResult,
  this.turnStatus = turnStatus
}

Player.prototype.rollDice = function() {
  if (this.turnStatus === false) {
    console.log("Hey! It's not your turn yet.")
    return;
  }

  var protoDiceResult = Math.floor(Math.random()*6)+1;

  if (protoDiceResult === 1) {
    this.roundScore = 0;
    this.turnStatus = false;
    this.diceRollResult = 0;
    console.log(protoDiceResult);
    console.log("sorry, your turn is over");
  } else {
    this.diceRollResult = protoDiceResult;
    this.roundScore += this.diceRollResult;
    console.log(protoDiceResult);
  }
}

Player.prototype.playerHold = function () {
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  this.diceRollResult = 0;
  if (this.totalScore >= 100) {
    console.log("You won the game!")
  } else {
    this.turnStatus = false;
  }
}

/*These vars are for testing purposes*/
var player1 = new Player(0,0,0,true);
var player2 = new Player(0,0,0,false);
var player3 = new Player(0,0,0,false);
var player4 = new Player(0,0,0,false);

var pigGame = new GameGroup();

pigGame.addPlayer(player1);
pigGame.addPlayer(player2);
pigGame.addPlayer(player3);
pigGame.addPlayer(player4);



function turnCheck() {
  for (var i = 0; i < playerArray.length; i++) {
    console.log(i);
    if (playerArray[i].turnStatus === false) {
        playerArray[i+1].turnStatus = true;
        console.log(playerArray[i+1].turnStatus);
        return;
    }
  }
}
