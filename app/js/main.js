define('main', [
  'strategies/RandomOption',
  'strategies/SameOptionEveryTime',
  'Game',
  'Player'
], function(
  RandomOption,
  SameOptionEveryTime,
  Game,
  Player
) {
  'use strict';

  var numTotalGames = 1000;
  var scores = {
    numGamesPlayed: 0,
    numPlayer1Wins: 0,
    numPlayer2Wins: 0,
    numTies: 0
  };

  var options = [Game.ROCK, Game.PAPER, Game.SCISSORS];

  // player strategies
  var rockOption = new SameOptionEveryTime(Game.ROCK);
  var paperOption = new SameOptionEveryTime(Game.PAPER);
  var scissorsOption = new SameOptionEveryTime(Game.SCISSORS);
  var randomOption = new RandomOption();

  var playerA = new Player('player A', options, paperOption);
  var playerB = new Player('player B', options, randomOption);
  var game = new Game(playerA, playerB);

  // let's play a number of games
  for(let i = 0; i < numTotalGames; i++) {
    let outcome = game.start();
    scores.numGamesPlayed++;

    if(outcome === Game.LOSS) {
      scores.numPlayer2Wins++;
    }

    if(outcome === Game.WIN) {
      scores.numPlayer1Wins++;
    }

    if(outcome === Game.TIE) {
      scores.numTies++;
    }
  }

  document.getElementById('rps').innerHTML += `
    <h1 class="rps-title">Rock paper scissors</h1>
    <div class="rps-label">${playerA.getName()} wins ${scores.numPlayer1Wins} of ${scores.numGamesPlayed}</div>
    <div class="rps-label">${playerB.getName()} wins ${scores.numPlayer2Wins} of ${scores.numGamesPlayed}</div>
    <div class="rps-label">Tie: ${scores.numTies} of ${scores.numGamesPlayed}</div>
  `;
});

require(['main']);
