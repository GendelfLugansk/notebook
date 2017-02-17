/* jshint node: true */
"use strict";
process.env.DISABLE_NOTIFIER = true;

//noinspection SpellCheckingInspection
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    order = require("gulp-order"),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    connect = require('gulp-connect');

//sass
gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 7 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload())
        .pipe(notify('Done!'));
});

//js
gulp.task('js', function () {
    gulp.src('src/js/*.js')
        .pipe(plumber())
        /*.pipe(order([
         "jquery-1.12.1.min.js",
         "main.js"
         ]))*/
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload())
        .pipe(notify('Done!'));
});

// html
gulp.task('html', function () {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload())
        .pipe(notify('Done!'));
});

gulp.task('assets', function () {
    gulp.src('src/img/*.*')
        .pipe(gulp.dest('dist/img/'))
        .pipe(connect.reload())
        .pipe(notify('Images: done'));
    gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('dist/fonts/'))
        .pipe(connect.reload())
        .pipe(notify('Fonts: done'));
});

//connect
gulp.task('connect', function () {
    connect.server({
        root: 'dist/',
        port: 8000,
        livereload: true
    });
});


//Watch
gulp.task('watch', function () {
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/js/*.js'], ['js']);
    gulp.watch(['src/img/*.*', 'src/fonts/*.*'], ['assets']);
    gulp.watch(['src/*.html'], ['html']);
});

gulp.task('compile', ['sass', 'js', 'assets', 'html']);

//Default Task
gulp.task('default', ['connect', 'sass', 'js', 'assets', 'html', 'watch']);