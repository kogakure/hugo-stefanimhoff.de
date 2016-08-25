var gulp = require('gulp');
var cp = require('child_process');
var browsersync = require('browser-sync');
var config = require('../../config').hugo.development;

/**
 * Build the Hugo Site
 */
gulp.task('hugo', function(done) {
  browsersync.notify('Compiling Hugo');

  return cp.spawn('hugo', ['--config=' + config.config], { stdio: 'inherit' })
  .on('close', done);
});

gulp.task('hugo:rebuild', ['hugo'], function() {
  browsersync.reload();
});
