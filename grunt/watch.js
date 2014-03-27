module.exports = function(grunt) {
  grunt.config('watch', {
    scripts: {
      files: '<%= dirs.app %>/**/*.js',
      tasks: ['concat:app'],
      options: {
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
