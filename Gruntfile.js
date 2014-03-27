module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    dirs: {
      bower: 'bower_components',
      vendor: 'public/vendor',
      app: 'public/app'
    }
  });

  grunt.loadTasks('grunt');

  grunt.registerTask('unit', ['karma:once']);
};
