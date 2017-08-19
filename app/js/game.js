import gameOptions from './gameOptions';

const game = (player1, player2) => {
  const matrix = [                                         //   R P S
    [gameOptions.TIE, gameOptions.LOSS, gameOptions.WIN],  // R - - -
    [gameOptions.WIN, gameOptions.TIE, gameOptions.LOSS],  // P - - -
    [gameOptions.LOSS, gameOptions.WIN, gameOptions.TIE]   // S - - -
  ];

  return {
    start: () => matrix[player1.getChoice()][player2.getChoice()]
  };
}

export default game;
