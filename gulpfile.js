var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

var paths = {
  scripts: ['src/lib/d3/d3.js', 'src/lib/c3/c3.js', 'src/scripts/**/*.js'],
  stylus: ['src/styles/main.styl'],
  watchStylus: ['src/styles/**/*.styl'],
  css: ['src/styles/**/*.css']
  // html: ['src/']
};

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
    .pipe($.stylus())
    .pipe(gulp.dest('dist/'))
    .pipe($.notify({message: 'Stylus Compiled'}));
});

gulp.task('css', ['stylus'], function() {
  paths.css.unshift('src/lib/c3/c3.css');
  return gulp.src(paths.css)
    .pipe($.concat('oxford.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('jshint', function() {
  return gulp.src(paths.scripts)
    .pipe($.jshint())
    .pipe($.jshint({reporter: 'jshint-stylish'}));
});

gulp.task('concat', function() {
  return gulp.src(paths.scripts)
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

gulp.task('watch', function() {
  gulp.watch(paths.watchStylus, ['stylus']);
});
//task to tell travis to run karma start and run in phantom.js
gulp.task('test', $.shell.task([
  'karma start karma.conf.js --browsers Firefox --single-run'
]));

gulp.task('build', ['jshint', 'uglify', 'css']);

gulp.task('default', ['build', 'watch']);
