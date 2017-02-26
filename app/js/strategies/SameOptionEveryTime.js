define(['./IStrategy'], function(IStrategy) {
  'use strict';

  /**
   * SameOptionEveryTime
   * @param {int} option
   */
  function SameOptionEveryTime(option) {
    this.option = option;
  };

  SameOptionEveryTime.prototype = Object.create(IStrategy.prototype);

  /**
   * Returns the preselected option from the given options
   * @param {array} options
   * @return {int}
   */
  SameOptionEveryTime.prototype.getOption = function(options) {
    return options.find(function(option) {
      return this.option === option;
    }.bind(this));
  }

  return SameOptionEveryTime;
});
