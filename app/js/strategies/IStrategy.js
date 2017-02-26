define(function() {
  'use strict';

  /**
   * IStrategy
   */
  function IStrategy() {
    throw new Error('This is not the object you\'re looking for. This is an interface.');
  };

  IStrategy.prototype.getOption = function() {
    throw new Error('Please override getOption in your padawan class');
  }

  return IStrategy;
});
