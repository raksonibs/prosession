var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream')

gulp.task('js', function(){
    browserify('./public/js/src/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('.tmp'));
});

gulp.task('live-server', function() {
  var server = new LiveServer('server.js');
  server.start();
})

gulp.task('bundle', ['copy'], function() {
  return browserify({
    entries: './public/js/src/app.jsx',
    debug: true,

  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'))
})

gulp.task('watch', function() {
    gulp.watch("public/js/src/**/*.jsx", ["js"])
})

gulp.task('copy', function() {
  gulp.src(["app/*.css"])
  .pipe(gulp.dest('./.tmp'));
})

gulp.task('serve', ['bundle', 'live-server'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:8888',
    port: 9009
  })
})