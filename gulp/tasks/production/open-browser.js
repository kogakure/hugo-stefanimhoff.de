var gulp = require('gulp');
var cp = require('child_process');

/**
 * Build the Jekyll Site
 */
gulp.task('open-browser', function(done) {
  return cp.spawn('open', ['https://stefanimhoff.de'], { stdio: 'inherit' })
  .on('close', done);
});
