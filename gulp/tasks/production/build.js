var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('production:build', function(callback) {
  runSequence('delete', 'styles', 'criticalcss', [
    'production:hugo',
    'scripts',
    'base64'
  ], [
    'optimize:html',
    'optimize:css',
    'optimize:js',
    'production:images'
  ],
    'revision',
    'rev:collect',
    callback);
});
