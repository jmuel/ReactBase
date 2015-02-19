var gulp = require('gulp')
, source = require('vinyl-source-stream')
, browserify = require('browserify')
, reactify = require('reactify')
, buffer = require('vinyl-buffer');

gulp.task('buildJS', function() {
  var bundler = browserify({
    entries: ['./js/app.jsx']   
  });

  var build = function() {
     return bundler
      .transform(reactify)
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(gulp.dest('./dist/js'));
  };

  return build();
});

gulp.task('buildHTML', function() {
  return gulp.src('./html/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['buildJS', 'buildHTML']);
