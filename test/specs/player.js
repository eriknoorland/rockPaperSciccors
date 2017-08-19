/* globals describe, it, should */

import player from '../../app/js/player';
import sameOptionEveryTime from '../../app/js/strategies/sameOptionEveryTime';
import randomOption from '../../app/js/strategies/randomOption';

describe('Player tests', () => {
  let p;

  beforeEach(() => {
    p = player('test name', {});
  });

  it('#getName() should return the given name', () => {
    const expected = 'test name';
    const actual = p.getName();

    should.equal(expected, p.getName());
  });
});

describe('Player same option strategy tests', () => {
  let sameOption;
  let p;

  beforeEach(() => {
    sameOption = sameOptionEveryTime([1, 2, 3], 1);
    p = player('test name', sameOption);
  });

  it('#getChoice() should return the given option', () => {
    const expected = 1;
    const actual = p.getChoice();

    should.equal(expected, actual);
  });
});

describe('Player random option strategy tests', () => {
  let random;
  let p;

  beforeEach(() => {
    random = randomOption([1, 2, 3]);
    p = player('test name', random);
  });

  it('#getChoice() should return one of the given options', () => {
    const actual = p.getChoice();

    actual.should.satisfy(function(value) {
      return value === 1 || value === 2 || value === 3;
    });
  });
});

describe('Player change strategy tests', () => {
  let sameOption1;
  let sameOption2;
  let p;

  beforeEach(() => {
    sameOption1 = sameOptionEveryTime([1, 2, 3], 1);
    sameOption2 = sameOptionEveryTime([1, 2, 3], 2);
    p = player('test name', sameOption1);
  });

  it('#getChoice() should return the given option', () => {
    const expected = 1;
    const actual = p.getChoice();

    should.equal(expected, actual);
  });

  it('#getChoice() should return the given option after switching strategy', () => {
    p.setStrategy(sameOption2);

    const expected = 2;
    const actual = p.getChoice();

    should.equal(expected, actual);
  });
});
