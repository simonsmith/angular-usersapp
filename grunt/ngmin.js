module.exports = function(grunt) {
  grunt.config('ngmin', {
    app: {
      src: 'public/app.built.js',
      dest: 'public/app.built.js'
    }
  });

  grunt.loadNpmTasks('grunt-ngmin');
};
