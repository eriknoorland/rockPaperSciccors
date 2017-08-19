/* globals describe, it, should */

import sameOptionEveryTime from '../../app/js/strategies/sameOptionEveryTime';

describe('SameOptionEveryTime tests', () => {
  it('#getOption(options) should return the given option', () => {
    const expected = 2;
    const actual = sameOptionEveryTime([1, 2, 3], 2).getOption();

    should.equal(expected, actual);
  });
});
