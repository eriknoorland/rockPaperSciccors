/* globals describe, it, should */

define(['strategies/SameOptionEveryTime'], function(SameOptionEveryTime) {
  'use strict';

  describe('SameOptionEveryTime tests', function() {
    var sameOptionEveryTime;

    beforeEach(function() {
      sameOptionEveryTime = new SameOptionEveryTime(2);
    });

    it('#getOption(options) should return the given option', function() {
      should.equal(2, sameOptionEveryTime.getOption([1, 2, 3]));
    });
  });
});
