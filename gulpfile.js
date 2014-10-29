var gulp    = require('gulp'),
    $       = require('gulp-load-plugins')(),
    open    = require('gulp-open'), // // gulp-open does not work as $.open ????????
    wiredep = require('wiredep'),
    server  = require('./config/server.js'),
    paths   = require('./config/paths')



gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
    .pipe($.stylus())
    .pipe(gulp.dest('dist/'))
    .pipe($.notify({message: 'Stylus Compiled'}))
    // Reload The Browser when changed;
});

gulp.task('css', ['stylus'], function() {
  paths.css.unshift('src/lib/c3/c3.css');
  return gulp.src(paths.css)
    .pipe($.concat('oxford.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('jshint', function() {
  return gulp.src(paths.scripts)
    .pipe($.jshint())
    .pipe($.jshint({reporter: 'jshint-stylish'}))
    // Reload The Browser when changed
    .pipe($.livereload() )
});

gulp.task('concat', function() {
  return gulp.src(paths.src.scripts)
    .pipe($.concat('oxford.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('concat:min', function() {
  paths.scripts.shift();
  paths.scripts.shift();
  paths.scripts.unshift('src/lib/d3/d3.min.js');
  paths.scripts.unshift('src/lib/c3/c3.min.js');
  return gulp.src(paths.scripts)
    .pipe($.concat('oxford.min.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('uglify', ['concat', 'concat:min'], function() {
  return gulp.src('dist/oxford.min.js')
    .pipe($.uglify())
    .pipe(gulp.dest('dist/'));
});

/*
 *  Inject BOWER DEPENDENCIES with wiredep into demo/index.html
 *  @NOTE Wiredep will only inject the files by prepedning them with a ../ this still works.
 */
gulp.task('inject:bower', function () {

  var bowerFiles = wiredep.stream;
  return gulp.src( paths.demo.index)
    .pipe( bowerFiles({
      directory: paths.bower,
      ignorePath: '/src'
    }))
    .pipe( gulp.dest( paths.demo.root ) );
});

/*
 *  Inject JS and CSS files into demo/index.html
 */
gulp.task('inject', ['inject:bower'], function(){
  /*
   * @NOTE: read:false tells gulp to not read the file's contents. We just want the file paths;
   */

  // Grab all js files in './src/scripts'
  var scripts = gulp.src( paths.src.scripts, {read:false} );
  // Grab dist/oxford.css and dist/main
  var styles  = gulp.src( paths.dist.styles, {read:false} );
  // Grab all the demo js files
  var demo    = gulp.src( paths.demo.scripts, {read:false} );
  // Grab demo/index.html, read is not false,
  // because we need to read the file in order to find wheer to inject;
  var target  = gulp.src( paths.demo.index );

  return target
    // Inject '/scripts' into demo/index.html
    .pipe( $.inject( scripts, {
      addRootSlash: true,
      relative:false,
      ignorePath: 'src',
      name: 'scripts'
    }))
    // inject '/oxford.css' and './main.css' into demo/index.html
    .pipe($.inject( styles, {
      addRootSlash: true,
      relative:false,
      ignorePath: 'dist',
      name: 'styles'
    }))
    .pipe($.inject( demo, {
      addRootSlash: false,
      relative:true,
      name: 'demo'
    }))
    .pipe( gulp.dest( paths.demo.root ) );
});

gulp.task('watch', function() {
  gulp.watch([paths.demo.index, paths.demo.scripts], $.livereload.changed);
  gulp.watch( paths.src.scripts, ['jshint'] );
  gulp.watch( paths.src.stylesPath, ['css', $.livereload.changed]);
});

/*
 *  Runs the server.js file
 *  the server file is serving up demo/index.html, dist/, and src/
 *  Now in your index.html you can access the files by prepending a root slash
 *  Example: In order to load ./src/scripts/main.js you would put the following in demo/index.html
 *  - <script src="/scripts/main.js"></script>
*/

// @NOTE 'serve' just runs the server.js and builds files
// @NOTE 'server' runs the serve task and opens the browser
gulp.task('serve',['demo', 'watch'], function(){
  server.run();
});
gulp.task('server', ['serve'], function(){
  return gulp.src( paths.demo.index )
    .pipe( open("", {url: paths.server.host} ));
});

//task to tell travis to run karma start and run in phantom.js
gulp.task('test', $.shell.task([
  'karma start karma.conf.js --browsers Firefox --single-run'
]));

gulp.task('demo', ['jshint', 'css', 'inject'])

gulp.task('build', ['jshint', 'uglify', 'css', 'inject:js']);

gulp.task('default', ['build', 'watch']);
