define(function() {
  'use strict';

  /**
   * Game
   * @param {Player} player1
   * @param {Player} player2
   */
  function Game(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  // static constants
  Object.defineProperty(Game, 'ROCK', {value: 0, writable: false});
  Object.defineProperty(Game, 'PAPER', {value: 1, writable: false});
  Object.defineProperty(Game, 'SCISSORS', {value: 2, writable: false});

  Object.defineProperty(Game, 'WIN', {value: 1, writable: false});
  Object.defineProperty(Game, 'LOSS', {value: -1, writable: false});
  Object.defineProperty(Game, 'TIE', {value: 0, writable: false});

  Object.defineProperty(Game, 'matrix', {
    value: [                            //   R P S
      [Game.TIE, Game.LOSS, Game.WIN],  // R - - -
      [Game.WIN, Game.TIE, Game.LOSS],  // P - - -
      [Game.LOSS, Game.WIN, Game.TIE]   // S - - -
    ],
    writable: false
  });

  /**
   * Returns the outcome for a new game. The outcome is for player 1
   * Player 1 is the row
   * Player 2 is the column
   *
   * @return {int}
   */
  Game.prototype.start = function() {
    var choice1 = this.player1.getChoice();
    var choice2 = this.player2.getChoice();
    var outcome = Game.matrix[choice1][choice2];

    return outcome;
  };

  return Game;
});
