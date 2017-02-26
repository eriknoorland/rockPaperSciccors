/* globals describe, it, should */

define(['strategies/RandomOption'], function(RandomOption) {
  'use strict';

  describe('RandomOption tests', function() {
    var randomOption;

    beforeEach(function() {
      randomOption = new RandomOption();
    });

    it('#getOption(options) should return one of the given options', function() {
      randomOption.getOption([1, 2, 3]).should.satisfy(function(value) {
        return value === 1 || value === 2 || value === 3;
      });
    });
  });
});
