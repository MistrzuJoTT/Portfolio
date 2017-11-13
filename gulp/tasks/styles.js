var gulp = require('gulp'),
<<<<<<< HEAD
sass = require('gulp-sass'),
autoprefixer = require('autoprefixer');


gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.scss')
    .pipe(sass([autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
=======
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});

>>>>>>> aed7d96a11ce92ff6bace7e6978808aa0d6e517f
