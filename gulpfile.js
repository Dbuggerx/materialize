/* jshint -W097 */
"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  gulp.src('sass/materialize.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));

  gulp.src('sass/ghpages-materialize.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/components/_*.scss', ['sass']);
});

gulp.task('js', function () {
  gulp.src('js/*.js')
    .pipe(concat('materialize.js', {newLine: ';'}))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('js:watch', function () {
  gulp.watch('js/**/*.js', ['js']);
});

gulp.task('default', ['sass:watch', 'js:watch']);
