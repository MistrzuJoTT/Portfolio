var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

<<<<<<< HEAD
  watch('./app/assets/styles/**/*.scss' ['sass'], function() {
=======
  watch('./app/assets/styles/**/*.css', function() {
>>>>>>> aed7d96a11ce92ff6bace7e6978808aa0d6e517f
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
<<<<<<< HEAD
});
gulp.task( 'default', [ 'watch' ] )
=======
});
>>>>>>> aed7d96a11ce92ff6bace7e6978808aa0d6e517f
