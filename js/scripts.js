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

// Checks to see if player's turn is over. If yes, it sets the next player's turn to 'true'
GameGroup.prototype.turnCheck = function(player) {
  if (player.id === this.pigplayers.length) {
    if (player.turnStatus === false) {
        this.pigplayers[0].turnStatus = true;
        return "";
    }
  }

  for (var i = (player.id-1); i < this.pigplayers.length; i++) {
    console.log(i);
    if (player.turnStatus === false) {
        this.pigplayers[i+1].turnStatus = true;
        console.log(this);
        return "";
    }
  }
}

function Player(totalScore, roundScore, diceRollResult, turnStatus) {
  this.totalScore = totalScore,
  this.roundScore = roundScore,
  this.diceRollResult = diceRollResult,
  this.turnStatus = turnStatus
}

Player.prototype.rollDice = function(group) {
  if (this.turnStatus === false) {
    console.log("Hey! It's not your turn yet.")
    return "";
  }

  var protoDiceResult = Math.floor(Math.random()*6)+1;

  if (protoDiceResult === 1) {
    this.roundScore = 0;
    this.turnStatus = false;
    this.diceRollResult = 0;
    group.turnCheck(this);
    console.log("sorry, your turn is over");
    console.log("You rolled a " + protoDiceResult);
    console.log("Your round score is: " + this.roundScore);
    console.log("Your Total score is: " + this.totalScore);
    return "";
  } else {
    this.diceRollResult = protoDiceResult;
    this.roundScore += this.diceRollResult;
    console.log("You rolled a " + protoDiceResult);
    console.log("Your round score is: " + this.roundScore);
    console.log("Your Total score is: " + this.totalScore);
    return "";
  }
}

Player.prototype.playerHold = function (group) {
  if (this.turnStatus === false) {
    console.log("Hey! It's not your turn yet.");
    return "";
  }
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  this.diceRollResult = 0;
  this.turnStatus = false;
  group.turnCheck(this);
  if (this.totalScore >= 30) {
    console.log("You won the game!")
  } else {
    this.turnStatus = false;
    return "";
  }
}

/*These vars are for testing purposes*/
var player1 = new Player(0,0,0,true);
var player2 = new Player(0,0,0,false);
// var player3 = new Player(0,0,0,false);
// var player4 = new Player(0,0,0,false);
// var player5 = new Player(0,0,0,false);

var pigGame = new GameGroup();

pigGame.addPlayer(player1);
pigGame.addPlayer(player2);
// pigGame.addPlayer(player3);
// pigGame.addPlayer(player4);
// pigGame.addPlayer(player5);

function turnCheck() {
  for (var i = 0; i < playerArray.length; i++) {
    console.log(i);
    if (playerArray[i].turnStatus === false) {
        playerArray[i+1].turnStatus = true;
        console.log(playerArray[i+1].turnStatus);
        return "";
    }
  }
}


$(document).ready(function() {
  $("form").on("click", "button#player1-Roll", function() {
    console.log("p1 rolled!");
    player1.rollDice(pigGame);

    $("span#output-player1-round-score").text(player1.roundScore);
    $("span#output-player1-total-score").text(player1.totalScore);
  });
  $("form").on("click", "button#player1-Hold", function() {
    console.log("p1 hold!");
    player1.playerHold(pigGame);

    $("span#output-player1-round-score").text(player1.roundScore);
    $("span#output-player1-total-score").text(player1.totalScore);
  });
  $("form").on("click", "button#player2-Roll", function() {
    console.log("p1 rolled!");
    player2.rollDice(pigGame);
    $("span#output-player2-round-score").text(player2.roundScore);
    $("span#output-player2-total-score").text(player2.totalScore);
  });
  $("form").on("click", "button#player2-Hold", function() {
    console.log("p1 hold!");
    player2.playerHold(pigGame);
    $("span#output-player2-round-score").text(player2.roundScore);
    $("span#output-player2-total-score").text(player2.totalScore);
  });









});
