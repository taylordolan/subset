// include gulp
var gulp = require('gulp');

// include plugins
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');

//concatenate and minify js files
gulp.task('scripts', function() {
  return gulp.src(['src/js/vars.js', 'src/js/deck.js', 'src/js/functions.js', 'src/js/app.js'])
    .pipe(concat('main.js'))
      .pipe(rename({suffix: '.min'}))
      // .pipe(uglify())
      .pipe(gulp.dest('build/js'));
});

// compile css from scss files
gulp.task('sass', function() {
  return sass('src/scss/index.scss', {style: 'compressed'})
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('build/css'));
});

gulp.task('copy-index', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('build/'));
});

// watch js and scss files
gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('index.html', ['copy-index']);
 });

// default task
gulp.task('default', ['scripts', 'sass', 'copy-index', 'watch']);
