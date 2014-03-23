# Ghost Theming Starter

## GETTING STARTED

#### Prerequisites

* Node.js & NPM
* Bower

#### Install dependancies

1. From a console / terminal, cd to the root folder of the project
2. Run `npm install`
3. Run `bower install`
4. Install Ghost locally next to this project in the same root directory. ( http://docs.ghost.org/installation/ )
5. In Gruntfile.js set values for `ghost_location` and `ghost_theme_name` 


#### Terminal commands

* Initiate watch: `grunt`
* Compile sass/scss: `grunt sass`
* Uglify js: `grunt uglify`
* Combine and minify css: `grunt cssmin`


#### Development
1. After setting up the above dependencies the best way to develop is to startup your ghost blog locally ( ie. `cd` into the blogs root and `npm start` in terminal ).
2. Then in another terminal window `cd` into this project and type `grunt`.
3. These two steps will start up the Ghost blogging platform locally and then tell your project to watch for changes. These changes will auto-magically be compiled and copied over to the /Ghost/content/themes/ directory.
4. After your first change your theme should be created in the themes directory of your Ghost installation. You'll need to switch to your new theme in the Ghost Admin settings.
4. As long as your blog is running in the active tab of your browser window you will also see your changes in the project auto reload the browser. NOTE: Currently the auto reload just auto reloads your active tab of your browser so make sure you're looking at your local ghost blog otherwise you will get auto reloads on unwanted pages.
