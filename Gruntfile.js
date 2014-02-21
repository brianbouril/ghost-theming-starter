module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    'ghost_theme_location': '<%= pkg.ghostinstall %>content/themes/<%= pkg.name %>',

    theme: './theme',
    assets: '<%= theme %>/assets',

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

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          './.tmp/css/style.css': '<%= assets %>/sass/style.scss'
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          '<%= ghost_theme_location %>/assets/css/style.css': ['bower_components/normalize-css/normalize.css', '.tmp/css/style.css']
        }
      }
    },

    copy: {
      dev: {
        files: [
          {expand: true, cwd: './theme', src:['**/*.hbs'], dest: '<%= ghost_theme_location %>'}
        ]
      }
    },

    clean: {
      options: {
        force: true
      },
      dev: {
        src: ['<%= ghost_theme_location %>/**/*.hbs']    // Changed this from static_src to static
      }
    },

    watch: {
      html: {
        files: [
        '<%= theme %>/*.hbs'
        ],
        tasks: ['sass']
      },
      sass: {
        files: [
        '<%= assets %>/sass/*'
        ],
        tasks: ['sass']
      },
      css: {
        files: [
        './.tmp/css/style.css'
        ],
        tasks: ['cssmin']
      },
      reload: {
        files: [
        '<%= ghost_theme_location %>/**'
        ],
        tasks: ['reload']
      },
      copy: {
        files: ['<%= theme %>/**/*.hbs'],
        tasks: ['copy'],
        options: {
          event: ['added', 'changed'],
        }
      },
      remove: {
        files: ['<%= theme %>/**/*.hbs'],
        tasks: ['clean', 'copy'],    // Added copy task after clean
        options: {
          event: ['deleted']
        }
      }
    }

    

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy'); // ADD copying of new or changed html files to ghost destination
  grunt.loadNpmTasks('grunt-contrib-clean'); // ADD watch for single file deletion and clean that file from the destination

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