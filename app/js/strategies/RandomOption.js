define(['./IStrategy'], function(IStrategy) {
  'use strict';

  /**
   * RandomOption
   */
  function RandomOption() {
    //
  };

  RandomOption.prototype = Object.create(IStrategy.prototype);

  /**
   * Returns an option from the given options
   * @param {array} options
   * @return {int}
   */
  RandomOption.prototype.getOption = function(options) {
    var index = Math.floor(Math.random() * options.length);
    return options[index];
  }

  return RandomOption;
});
