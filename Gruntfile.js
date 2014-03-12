module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    dirs: {
      bower: 'bower_components',
      vendor: 'public/vendor',
      app: 'public/app'
    }
  });

  grunt.config('watch', {
    scripts: {
      files: '<%= dirs.app %>/**/*.js',
      tasks: ['concat:app'],
      options: {
        spawn: false
      }
    }
  });

  grunt.config('concat', {
    scripts: {
      files: {
        // angular
        '<%= dirs.vendor %>/angular/angular.js': [
          '<%= dirs.bower %>/angular/angular.js',
          '<%= dirs.bower %>/angular-route/angular-route.js',
          '<%= dirs.bower %>/angular-resource/angular-resource.js',
          '<%= dirs.bower %>/angular-bootstrap/ui-bootstrap-tpls.js'
        ]
      }
    },
    bootstrap: {
      files: {
        '<%= dirs.vendor %>/bootstrap/bootstrap.css': '<%= dirs.bower %>/bootstrap/dist/css/bootstrap.css'
      }
    },
    app: {
      files: {
        'public/app.built.js': [
          '<%= dirs.app %>/**/*.js'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'concat'
  ]);
};
