module.exports = function(grunt) {
  grunt.config('karma', {
    options: {
      configFile: 'test/karma.config.js'
    },
    once: {
      singleRun: true
    },
    unit: {
      autoWatch: true
    }
  });

  grunt.loadNpmTasks('grunt-karma');
};
