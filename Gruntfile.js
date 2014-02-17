module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: [
        'sass/*'
        ],
        tasks: ['sass']
      },
      css: {
        files: [
        'dist/css/*'
        ],
        tasks: ['cssmin']
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      combinejs: {
        files: {
          '<%= ghost_location %>content/themes/<%= ghost_theme_name %>/assets/js/all.min.js': 
          [
          'bower_components/modernizr/modernizr.js',
          'custom_components/responsive_iframes/responsive_iframes.js'
          ]
        }
      }
    },

    //switch to sass contrib
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/css/main.css': 'sass/main.scss'
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          '<%= ghost_location %>content/themes/<%= ghost_theme_name %>/assets/css/style.css': ['bower_components/normalize-css/normalize.css', 'dist/css/main.css']
        }
      }
    },

    'ghost_location': '../Ghost/',
    'ghost_theme_name': 'solo',

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['watch']);

};