var gulp = require('gulp');
var cp = require('child_process');
var browsersync = require('browser-sync');
var config = require('../../config').hugo.production;

/**
 * Build the Hugo Site
 */
gulp.task('production:hugo', function(done) {
  browsersync.notify('Compiling Hugo (Production)');

  return cp.spawn('hugo', ['--config=' + config.config], { stdio: 'inherit' })
  .on('close', done);
});
