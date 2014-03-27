module.exports = function(grunt) {
  grunt.config('concat', {
    scripts: {
      files: {
        // angular
        '<%= dirs.vendor %>/angular/angular.js': [
          '<%= dirs.bower %>/angular/angular.js',
          '<%= dirs.bower %>/angular-route/angular-route.js',
          '<%= dirs.bower %>/angular-resource/angular-resource.js',
          '<%= dirs.bower %>/angular-bootstrap/ui-bootstrap-tpls.js'
        ],

        'test/lib/angular-mocks.js': '<%= dirs.bower %>/angular-mocks/angular-mocks.js'
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
};
