/* globals mocha */

define([
  'test/specs/SameOptionEveryTime',
  'test/specs/RandomOption',
  'test/specs/Player',
  'test/specs/Game'
], function() {
  'use strict';

  if(typeof mochaPhantomJS !== 'undefined') {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
});
