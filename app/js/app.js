import player from './player';
import game from './game';
import gameOptions from './gameOptions';
import sameOptionEveryTime from './strategies/sameOptionEveryTime';
import randomOption from './strategies/randomOption';

function start() {
  const numTotalGames = 1000;
  const scores = { numPlayed: 0, num1Wins: 0, num2Wins: 0, numTies: 0 };
  const options = [gameOptions.ROCK, gameOptions.PAPER, gameOptions.SCISSORS];
  const rockOption = sameOptionEveryTime(options, gameOptions.ROCK);
  const paperOption = sameOptionEveryTime(options, gameOptions.PAPER);
  const scissorsOption = sameOptionEveryTime(options, gameOptions.SCISSORS);
  const random = randomOption(options);
  const playerA = player('player A', paperOption);
  const playerB = player('player B', random);

  for(let i = 0; i < numTotalGames; i++) {
    const outcome = game(playerA, playerB).start();
    scores.numPlayed++;

    if(outcome === gameOptions.LOSS) {
      scores.num2Wins++;
    }

    if(outcome === gameOptions.WIN) {
      scores.num1Wins++;
    }

    if(outcome === gameOptions.TIE) {
      scores.numTies++;
    }
  }

  render([playerA, playerB], scores);
}

function render(players, scores) {
  const { num1Wins, num2Wins, numTies, numPlayed } = scores;
  const [ player1, player2 ] = players;

  document.getElementById('rps').innerHTML += `
    <h1 class="rps-title">Rock paper scissors</h1>
    <div class="rps-label">
      ${player1.getName()} wins ${num1Wins} of ${numPlayed}
    </div>
    <div class="rps-label">
      ${player2.getName()} wins ${num2Wins} of ${numPlayed}
    </div>
    <div class="rps-label">
      Tie: ${numTies} of ${numPlayed}
    </div>
  `;
}

start();
