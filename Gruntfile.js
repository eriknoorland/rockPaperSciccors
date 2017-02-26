/* globals module */

module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '0.0.0.0',
          base: 'app',
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('serve', ['connect']);
};
