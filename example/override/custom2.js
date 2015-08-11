'use strict';
module.exports = function (grunt) {
  grunt.registerMultiTask('custom2', 'custom task 2 overriden', function () {
    grunt.log.ok('custom2 override!');
  });
};
