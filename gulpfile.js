var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    server = require('./app.js');

gulp.task('serve', function(){
  return server;
});

gulp.task('style', function(){
  return sass('./scss/main.scss')
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public'));
});

gulp.task('js', function(){
  return gulp.src('./js/**/*.js')
    .pipe(concat('compiled.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['style']);
  gulp.watch('js/**/*.js', ['js'])
});

gulp.task('default', ['watch', 'serve'], function(){

});

