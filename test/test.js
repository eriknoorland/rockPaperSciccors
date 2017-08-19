import './specs/sameOptionEveryTime';
import './specs/randomOption';
import './specs/player';
import './specs/game';

if(typeof mochaPhantomJS !== 'undefined') {
  mochaPhantomJS.run();
} else {
  mocha.run();
}
