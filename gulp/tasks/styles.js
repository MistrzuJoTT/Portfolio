var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('autoprefixer');


gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.scss')
    .pipe(sass([autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});