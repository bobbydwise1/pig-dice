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
// var player1 = new Player(0,0,0,true);
// var player2 = new Player(0,0,0,false);
//
var pigGame = new GameGroup();
//
// pigGame.addPlayer(player1);
// pigGame.addPlayer(player2);

var groupNumber = 0;


function initializePlayers() {
  for (var i = 0; i < groupNumber; i++) {
    if (i === 0) {
      var player = new Player(0,0,0,true)
    } else {
      var player = new Player(0,0,0,false)
    }
    pigGame.addPlayer(player);
  }
}

// function createPigGameArray(numberPlayers) {
//   for (index = 0; index < numberPlaeyrs; index++) {
//     var
//   }
// }

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


// CLIENT LOGIC

$(document).ready(function() {
  $(".twoPlayerView").hide();
  $("#threePlayerView").hide();
  $("#fourPlayerView").hide();


  $("#playerSelect").submit(function(event) {
    event.preventDefault();
    var numberPlayers = $("#selectNumberPlayers").val();
    console.log("Number of Players is: " + numberPlayers);

    groupNumber = parseInt(numberPlayers);
    initializePlayers();

    if(numberPlayers === "2") {
      $(".twoPlayerView").show();
    } else if (numberPlayers === "3") {
      $(".twoPlayerView").show();
      $("#threePlayerView").show();
    } else if (numberPlayers === "4") {
      $(".twoPlayerView").show();
      $("#threePlayerView").show();
      $("#fourPlayerView").show();
    }

  });


  $("form").on("click", "button#player1-Roll", function() {
    pigGame.pigplayers[0].rollDice(pigGame);
    $("span#output-player1-round-score").text(pigGame.pigplayers[0].roundScore);
    $("span#output-player1-total-score").text(pigGame.pigplayers[0].totalScore);
  });
  $("form").on("click", "button#player1-Hold", function() {
    pigGame.pigplayers[0].playerHold(pigGame);
    $("span#output-player1-round-score").text(pigGame.pigplayers[0].roundScore);
    $("span#output-player1-total-score").text(pigGame.pigplayers[0].totalScore);
  });

  $("form").on("click", "button#player2-Roll", function() {
    pigGame.pigplayers[1].rollDice(pigGame);
    $("span#output-player2-round-score").text(pigGame.pigplayers[1].roundScore);
    $("span#output-player2-total-score").text(pigGame.pigplayers[1].totalScore);
  });
  $("form").on("click", "button#player2-Hold", function() {
    pigGame.pigplayers[1].playerHold(pigGame);
    $("span#output-player2-round-score").text(pigGame.pigplayers[1].roundScore);
    $("span#output-player2-total-score").text(pigGame.pigplayers[1].totalScore);
  });

  $("form").on("click", "button#player3-Roll", function() {
    pigGame.pigplayers[2].rollDice(pigGame);
    $("span#output-player3-round-score").text(pigGame.pigplayers[2].roundScore);
    $("span#output-player3-total-score").text(pigGame.pigplayers[2].totalScore);
  });
  $("form").on("click", "button#player3-Hold", function() {
    pigGame.pigplayers[2].playerHold(pigGame);
    $("span#output-player3-round-score").text(pigGame.pigplayers[2].roundScore);
    $("span#output-player3-total-score").text(pigGame.pigplayers[2].totalScore);
  });

  $("form").on("click", "button#player4-Roll", function() {
    pigGame.pigplayers[3].rollDice(pigGame);
    $("span#output-player4-round-score").text(pigGame.pigplayers[3].roundScore);
    $("span#output-player4-total-score").text(pigGame.pigplayers[3].totalScore);
  });
  $("form").on("click", "button#player4-Hold", function() {
    pigGame.pigplayers[3].playerHold(pigGame);
    $("span#output-player4-round-score").text(pigGame.pigplayers[3].roundScore);
    $("span#output-player4-total-score").text(pigGame.pigplayers[3].totalScore);
  });


});
