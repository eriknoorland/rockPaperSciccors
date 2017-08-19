/* globals describe, it, should */

import gameOptions from '../../app/js/gameOptions';
import game from '../../app/js/game';
import player from '../../app/js/player';
import sameOptionEveryTime from '../../app/js/strategies/sameOptionEveryTime';
import randomOption from '../../app/js/strategies/randomOption';

describe('Game tests', () => { 
  let options;
  let rockOption;
  let paperOption;
  let scissorsOption;
  let random;
  let player1;
  let player2;

  beforeEach(() => { 
    options = [gameOptions.ROCK, gameOptions.PAPER, gameOptions.SCISSORS];
    rockOption = sameOptionEveryTime(options, gameOptions.ROCK);
    paperOption = sameOptionEveryTime(options, gameOptions.PAPER);
    scissorsOption = sameOptionEveryTime(options, gameOptions.SCISSORS);
    random = randomOption(options);
  });

  it('#start() should return gameOptions.TIE (rock is equal to rock)', () => { 
    player1 = player('player 1', rockOption);
    player2 = player('player 2', rockOption);
    const g = game(player1, player2);

    should.equal(gameOptions.TIE, g.start());
  });

  it('#start() should return gameOptions.TIE (paper is equal to paper)', () => { 
    player1 = player('player 1', paperOption);
    player2 = player('player 2', paperOption);
    const g = game(player1, player2);

    should.equal(gameOptions.TIE, g.start());
  });

  it('#start() should return gameOptions.TIE (sciccors is equal to sciccors)', () => { 
    player1 = player('player 1', scissorsOption);
    player2 = player('player 2', scissorsOption);
    const g = game(player1, player2);

    should.equal(gameOptions.TIE, g.start());
  });

  it('#start() should return gameOptions.WIN (rock beats sciccors)', () => { 
    player1 = player('player 1', rockOption);
    player2 = player('player 2', scissorsOption);
    const g = game(player1, player2);

    should.equal(gameOptions.WIN, g.start());
  });

  it('#start() should return gameOptions.WIN (scissors beats paper)', () => { 
    player1 = player('player 1', scissorsOption);
    player2 = player('player 2', paperOption);
    const g = game(player1, player2);

    should.equal(gameOptions.WIN, g.start());
  });

  it('#start() should return gameOptions.WIN (paper beats rock)', () => { 
    player1 = player('player 1', paperOption);
    player2 = player('player 2', rockOption);
    const g = game(player1, player2);

    should.equal(gameOptions.WIN, g.start());
  });

  it('#start() should return gameOptions.LOSS (paper beats rock)', () => { 
    player1 = player('player 1', rockOption);
    player2 = player('player 2', paperOption);
    const g = game(player1, player2);

    should.equal(gameOptions.LOSS, g.start());
  });

  it('#start() should return gameOptions.LOSS (scissors beats paper)', () => { 
    player1 = player('player 1', paperOption);
    player2 = player('player 2', scissorsOption);
    const g = game(player1, player2);

    should.equal(gameOptions.LOSS, g.start());
  });

  it('#start() should return gameOptions.LOSS (rock beats scissors)', () => { 
    player1 = player('player 1', scissorsOption);
    player2 = player('player 2', rockOption);
    const g = game(player1, player2);

    should.equal(gameOptions.LOSS, g.start());
  });

  it('#start() should return gameOptions.LOSS, gameOptions.WIN or gameOptions.TIE (paper vs rock or paper or scissors)', () => { 
    player1 = player('player 1', paperOption);
    player2 = player('player 2', random);
    const g = game(player1, player2);

    g.start().should.satisfy(function(value) {
      return value === gameOptions.LOSS || value === gameOptions.WIN || value === gameOptions.TIE;
    });
  });

  it('#start() should return gameOptions.LOSS, gameOptions.WIN or gameOptions.TIE (rock or paper or scissors vs rock or paper or scissors)', () => { 
    player1 = player('player 1', random);
    player2 = player('player 2', random);
    const g = game(player1, player2);

    g.start().should.satisfy(function(value) {
      return value === gameOptions.LOSS || value === gameOptions.WIN || value === gameOptions.TIE;
    });
  });
});
