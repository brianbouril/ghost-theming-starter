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
      },
      ghostcss: {
        files: [
        '<%= ghost_theme_location %>/assets/css/*'
        ],
        tasks: ['reload']
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      combinejs: {
        files: {
          '<%= ghost_theme_location %>/assets/js/all.min.js': 
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
          '<%= ghost_theme_location %>/assets/css/style.css': ['bower_components/normalize-css/normalize.css', 'dist/css/main.css']
        }
      }
    },

    'ghost_theme_location': '<%= pkg.ghostinstall %>content/themes/<%= pkg.name %>'

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['watch']);

  grunt.registerTask('setup', 'Create initial theme directory and files in Ghost/content/themes', function() {
    // if (failureOfSomeKind) {
    //   grunt.log.error('This is an error message.');
    // }

    //grunt.file.exists(path1 [, path2 [, ...]])
    // Fail by returning false if this task had errors
    //if (ifErrors) { return false; }
    
    var package = grunt.file.readJSON('package.json');
    grunt.log.writeln("Theme name is: "+package.name);
    grunt.log.writeln("Your theme is located at: "+package.ghostinstall + "content/themes/" + package.name);

    //grunt.log.writeln('This is the success message');
  });

  // https://coderwall.com/p/keuhda
  grunt.registerTask("reload", "reload Chrome on OS X",
    function() {
      require("child_process").exec("osascript " +
          "-e 'tell application \"Google Chrome\" " +
            "to tell the active tab of its first window' " +
          "-e 'reload' " +
          "-e 'end tell'");
  });

};