'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var clone = require('gulp-clone');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var merge = require('merge-stream');
var sourcemaps = require('gulp-sourcemaps');
var bump = require('gulp-bump');


gulp.task('bump', function(){
    gulp.src(['./bower.json', './package.json'])
        .pipe(bump({type:'minor'}))
        .pipe(gulp.dest('./'));
});

gulp.task('bump-major', function(){
    gulp.src(['./bower.json', './package.json'])
        .pipe(bump({type:'major'}))
        .pipe(gulp.dest('./'));
});

gulp.task('default', function() {
    var scss = gulp.src('./dev/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));

    var autoprefixed = gulp.src('dist/paradeiser.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions', 'ie 8', 'ie 9'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));

    var min = autoprefixed.pipe(clone())
        .pipe(cssnano({discardComments: {removeAll: true}}))
        .pipe(rename('dist/min/paradeiser.min.css'));

    return merge(autoprefixed, min)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(''));
});