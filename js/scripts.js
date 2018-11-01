// BUSINESS LOGIC -----------
var diceShowUI = 0;
var pigGame = new GameGroup();
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

// GameGroup constructor and methods -----------
function GameGroup() {
  this.pigplayers = [],
  this.currentID = 0,
  this.winStatus = false
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

// Resets the game by clearing all players and IDs
GameGroup.prototype.reset = function() {
  this.currentID = 0;
  this.pigplayers = [];
  this.winStatus = false;
}

// Player constructor and methods -----------
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
  diceShowUI = protoDiceResult;

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
  if (this.totalScore >= 20) {
    console.log("You won the game!")
    pigGame.winStatus = true;
  } else {
    this.turnStatus = false;
    return "";
  }
}


var activePlayerButton = 0;
// CLIENT LOGIC

$(document).ready(function() {
  $(".twoPlayerView").hide();
  $("#threePlayerView").hide();
  $("#fourPlayerView").hide();
  $("#welcomeScreen").show();
  $("#playerSelect").hide();
  $("#gameGrid").hide();
  $("#endGame").hide();

  $("#welcomeScreen").on("click", "button", function() {
    event.preventDefault();
    console.log("INTRO BUTTON CLICKED");
    $("#welcomeScreen").slideUp();
    $("#playerSelect").slideDown();
});

$("#playerSelect").on("click", "button", function() {
  event.preventDefault();
  console.log("PLAY GAME BUTTON CLICKED");

  var numberPlayers = $("#selectNumberPlayers").val();
  groupNumber = parseInt(numberPlayers);

  if(numberPlayers === "2") {
    $(".twoPlayerView").show();
    $("#threePlayerView").hide();
    $("#fourPlayerView").hide();
  } else if (numberPlayers === "3") {
    $(".twoPlayerView").show();
    $("#threePlayerView").show();
    $("#fourPlayerView").hide();
  } else if (numberPlayers === "4") {
    $(".twoPlayerView").show();
    $("#threePlayerView").show();
    $("#fourPlayerView").show();
  }

  pigGame.reset();
  initializePlayers();


  $("#playerSelect").slideUp();
  $("#gameGrid").slideDown();
});

$("div#reset").on("click", "button", function() {
  event.preventDefault();
  console.log("RESET BUTTON CLICKED");
  $("#gameGrid").slideUp();
  $("#playerSelect").slideDown();
});

$("div#instructions").on("click", "button", function() {
  console.log("INSTRUCTIONS");
  event.preventDefault();
  $("#gameGrid").hide();
  $("#welcomeScreen").show();
});


$("#endGame").on("click", "button", function() {
  event.preventDefault();
  console.log("START NEW GAME BUTTON CLICKED");
  $("#endGame").slideUp();
  $("#playerSelect").slideDown();
});




  $("#gameGrid").on("click", "button", function() {

    if(this.id === 'playerOneRoll' || this.id === 'playerOneHold'){
      activePlayerButton = 1;
    } else if(this.id === 'playerTwoRoll' || this.id === 'playerTwoHold') {
      activePlayerButton = 2;
    } else if(this.id === 'playerThreeRoll' || this.id === 'playerThreeHold') {
      activePlayerButton = 3;
    } else if(this.id === 'playerFourRoll' || this.id === 'playerFourHold') {
      activePlayerButton = 4;
    }

    if(this.id.includes("Roll")){
      pigGame.pigplayers[activePlayerButton - 1].rollDice(pigGame);
      // $("#show-dice").text(diceShowUI);
      // $(".dice").hide();
      // $(".dice-" + diceShowUI).show();
      $("#show-dice").html('<span class="dice dice-' + diceShowUI + '" title="Dice ' + diceShowUI +'"></span>');


      $("span#output-player"+activePlayerButton+"-round-score").text(pigGame.pigplayers[activePlayerButton - 1].roundScore);
      $("span#output-player"+activePlayerButton+"-total-score").text(pigGame.pigplayers[activePlayerButton - 1].totalScore);

    } else if(this.id.includes("Hold")) {
      pigGame.pigplayers[activePlayerButton - 1].playerHold(pigGame);
      // $(".dice").hide();
      $("span#output-player"+activePlayerButton+"-round-score").text(pigGame.pigplayers[activePlayerButton - 1].roundScore);
      $("span#output-player"+activePlayerButton+"-total-score").text(pigGame.pigplayers[activePlayerButton - 1].totalScore);
    }

    if(pigGame.winStatus === true) {
      $("#gameGrid").slideUp();
      $("#endGame").slideDown();

      var pigWinner = "";

      for(var i=0; i < pigGame.pigplayers.length; i++) {
        if(pigGame.pigplayers[i].turnStatus === true) {
          pigWinner = "Player " + (i);
        }
        console.log(pigWinner);
      }
      $("#winnerName").text(pigGame.pigplayers.length);

      for(var i = 1; i <=pigGame.pigplayers.length; i++) {
          $("span#output-player" + i + "-round-score").text(0);
          $("span#output-player" + i + "-total-score").text(0);
        }
    }

  });
});
