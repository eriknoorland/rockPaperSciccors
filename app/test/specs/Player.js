/* globals describe, it, should */

define([
  'Player',
  'strategies/SameOptionEveryTime',
  'strategies/RandomOption'
], function(
  Player,
  SameOptionEveryTime,
  RandomOption
) {
  'use strict';

  describe('Player tests', function() {
    var player;

    beforeEach(function() {
      player = new Player('test name', [1, 2, 3], {});
    });

    it('#getName() should return the given name', function() {
      should.equal('test name', player.getName());
    });
  });

  describe('Player same option strategy tests', function() {
    var sameOption;
    var player;

    beforeEach(function() {
      sameOption = new SameOptionEveryTime(1);
      player = new Player('test name', [1, 2, 3], sameOption);
    });

    it('#getChoice() should return the given option', function() {
      should.equal(1, player.getChoice());
    });
  });

  describe('Player random option strategy tests', function() {
    var randomOption;
    var player;

    beforeEach(function() {
      randomOption = new RandomOption();
      player = new Player('test name', [1, 2, 3], randomOption);
    });

    it('#getChoice() should return one of the given options', function() {
      player.getChoice().should.satisfy(function(value) {
        return value === 1 || value === 2 || value === 3;
      });
    });
  });

  describe('Player change strategy tests', function() {
    var sameOption1;
    var sameOption2;
    var player;

    beforeEach(function() {
      sameOption1 = new SameOptionEveryTime(1);
      sameOption2 = new SameOptionEveryTime(2);
      player = new Player('test name', [1, 2, 3], sameOption1);
    });

    it('#getChoice() should return the given option', function() {
      should.equal(1, player.getChoice());
    });

    it('#getChoice() should return the given option after switching strategy', function() {
      player.setStrategy(sameOption2);
      should.equal(2, player.getChoice());
    });
  });
});
