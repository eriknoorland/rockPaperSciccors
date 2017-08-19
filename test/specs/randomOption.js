/* globals describe, it, should */

import randomOption from '../../app/js/strategies/randomOption';

describe('RandomOption tests', () => {
  it('#getOption(options) should return one of the given options', () => {
    const actual = randomOption([1, 2, 3]).getOption();
    
    actual.should.satisfy(function(value) {
      return value === 1 || value === 2 || value === 3;
    });
  });
});
