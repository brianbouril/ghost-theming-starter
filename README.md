# Ghost Theming Starter

## GETTING STARTED

#### Prerequisites

* Node.js & NPM
* Bower

#### Install dependancies

1. From a console / terminal, cd to the root folder of the project
2. Run `npm install`
3. Run `bower install`
4. Install Ghost locally next to this project in the same parent directory. ( http://docs.ghost.org/installation/ )
5. In Gruntfile.js set values for `ghost_location` and `ghost_theme_name` 


#### Terminal commands

* Initial Setup: `grunt setup`
* Initiate watch: `grunt`
* Compile sass/scss: `grunt sass`
* Uglify js: `grunt uglify`
* Combine and minify css: `grunt cssmin`


#### Development
1. After setting up the above dependencies the best way to develop is to startup your ghost blog locally ( ie. `cd` into the blogs root and `npm start` in terminal ). Navigate your browser to the running instance of Ghost.
2. In another terminal window `cd` into this project and type `grunt setup`, this will create the initial theme files in the Ghost themes directory.
3. You'll need to switch to your new theme in the Ghost Admin settings
4. After setup type `grunt` to tell your project to watch for changes. These changes will auto-magically be compiled and copied over to the /Ghost/content/themes/yourthemename directory.
5. As long as your blog is running in the active tab of your browser window you will also see your changes in the project auto reload the browser. NOTE: Currently the auto reload just auto reloads your active tab of your browser so make sure you're looking at your local ghost blog otherwise you will get auto reloads on unwanted pages.
