define(['strategies/IStrategy'], function(IStrategy) {
  'use strict';

  /**
   * Player
   * @param {String} name
   * @param {array} options
   * @param {IStrategy} strategy
   */
  function Player(name, options, strategy) {
    this.name = name;
    this.options = options;

    this.setStrategy(strategy);
  }

  /**
   * Set a strategy
   * @param {IStrategy} strategy
   */
  Player.prototype.setStrategy = function(strategy) {
    if(!strategy instanceof IStrategy) {
      throw new TypeError('strategy must be an instance of IStrategy.');
    }

    this.strategy = strategy;
  };

  /**
   * Returns the players name
   * @return {String}
   */
  Player.prototype.getName = function() {
    return this.name;
  };

  /**
   * Returns the players choice
   * @return {int}
   */
  Player.prototype.getChoice = function() {
    return this.strategy.getOption(this.options);
  };

  return Player;
});
