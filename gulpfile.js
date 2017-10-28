// gulpfile.js

'use strict';

var gulp = require('gulp');

gulp.task('watch', require('./tasks/watch'));
gulp.task('bundle', require('./tasks/bundle'));
gulp.task('sass', require('./tasks/sass'));
gulp.task('sync', require('./tasks/sync'));

gulp.task('default', ['sass', 'bundle', 'watch', 'sync']);
