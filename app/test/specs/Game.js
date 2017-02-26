/* globals describe, it, should */

define([
  'Game',
  'Player',
  'strategies/SameOptionEveryTime',
  'strategies/RandomOption'
], function(
  Game,
  Player,
  SameOptionEveryTime,
  RandomOption
) {
  'use strict';

  describe('Game tests', function() {
    var options;

    var rockOption;
    var paperOption;
    var scissorsOption;
    var randomOption;

    var player1;
    var player2;

    beforeEach(function() {
      options = [Game.ROCK, Game.PAPER, Game.SCISSORS];

      rockOption = new SameOptionEveryTime(Game.ROCK);
      paperOption = new SameOptionEveryTime(Game.PAPER);
      scissorsOption = new SameOptionEveryTime(Game.SCISSORS);
      randomOption = new RandomOption();
    });

    it('#start() should return Game.TIE (rock is equal to rock)', function() {
      player1 = new Player('player 1', options, rockOption);
      player2 = new Player('player 2', options, rockOption);
      var g = new Game(player1, player2);

      should.equal(Game.TIE, g.start());
    });

    it('#start() should return Game.TIE (paper is equal to paper)', function() {
      player1 = new Player('player 1', options, paperOption);
      player2 = new Player('player 2', options, paperOption);
      var g = new Game(player1, player2);

      should.equal(Game.TIE, g.start());
    });

    it('#start() should return Game.TIE (sciccors is equal to sciccors)', function() {
      player1 = new Player('player 1', options, scissorsOption);
      player2 = new Player('player 2', options, scissorsOption);
      var g = new Game(player1, player2);

      should.equal(Game.TIE, g.start());
    });

    it('#start() should return Game.WIN (rock beats sciccors)', function() {
      player1 = new Player('player 1', options, rockOption);
      player2 = new Player('player 2', options, scissorsOption);
      var g = new Game(player1, player2);

      should.equal(Game.WIN, g.start());
    });

    it('#start() should return Game.WIN (scissors beats paper)', function() {
      player1 = new Player('player 1', options, scissorsOption);
      player2 = new Player('player 2', options, paperOption);
      var g = new Game(player1, player2);

      should.equal(Game.WIN, g.start());
    });

    it('#start() should return Game.WIN (paper beats rock)', function() {
      player1 = new Player('player 1', options, paperOption);
      player2 = new Player('player 2', options, rockOption);
      var g = new Game(player1, player2);

      should.equal(Game.WIN, g.start());
    });

    it('#start() should return Game.LOSS (paper beats rock)', function() {
      player1 = new Player('player 1', options, rockOption);
      player2 = new Player('player 2', options, paperOption);
      var g = new Game(player1, player2);

      should.equal(Game.LOSS, g.start());
    });

    it('#start() should return Game.LOSS (scissors beats paper)', function() {
      player1 = new Player('player 1', options, paperOption);
      player2 = new Player('player 2', options, scissorsOption);
      var g = new Game(player1, player2);

      should.equal(Game.LOSS, g.start());
    });

    it('#start() should return Game.LOSS (rock beats scissors)', function() {
      player1 = new Player('player 1', options, scissorsOption);
      player2 = new Player('player 2', options, rockOption);
      var g = new Game(player1, player2);

      should.equal(Game.LOSS, g.start());
    });

    it('#start() should return Game.LOSS, Game.WIN or Game.TIE (paper vs rock or paper or scissors)', function() {
      player1 = new Player('player 1', options, paperOption);
      player2 = new Player('player 2', options, randomOption);
      var g = new Game(player1, player2);

      g.start().should.satisfy(function(value) {
        return value === Game.LOSS || value === Game.WIN || value === Game.TIE;
      });
    });

    it('#start() should return Game.LOSS, Game.WIN or Game.TIE (rock or paper or scissors vs rock or paper or scissors)', function() {
      player1 = new Player('player 1', options, randomOption);
      player2 = new Player('player 2', options, randomOption);
      var g = new Game(player1, player2);

      g.start().should.satisfy(function(value) {
        return value === Game.LOSS || value === Game.WIN || value === Game.TIE;
      });
    });
  });
});
