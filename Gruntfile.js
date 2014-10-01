/*global module:false*/
'use strict';

var opt = require('./options');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({

    clean: {
      release: 'www-release'
    },

    requirejs: {
      compile: {
        options: opt
      }
    },

    cssmin: {
      compile: {
        files: {
          'www-release/css/style.css': 'www-release/css/style.css',
          'www-release/css/bootstrap.css': 'www-release/css/bootstrap.css',
          'www-release/css/bootstrap-responsive.css': 'www-release/css/bootstrap-responsive.css'
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'www-release/css/style.css': 'www-release/css/sass/style.scss'
        }
      }
    }
  });

  // Load tasks from NPM
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['clean', 'requirejs', 'sass', 'cssmin']);

};
