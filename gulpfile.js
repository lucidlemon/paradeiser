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

//react for demo
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var path = {
    HTML: 'demo-src/index.html',
    ALL: ['demo-src/js/*.js', 'demo-src/js/**/*.js', 'demo-src/index.html'],
    JS: ['demo-src/js/*.js', 'demo-src/js/**/*.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/demo-src',
    DEST_BUILD: 'demo/build',
    DEST: 'demo'
};

gulp.task('transform', function(){
    gulp.src(path.JS)
        .pipe(react())
        .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('copy', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function(){
    gulp.watch(path.ALL, ['transform', 'copy']);
});

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

gulp.task('compile-paradeiser', function(){
    gulp.exec(['transform', 'copy']);
});

gulp.task('compile-paradeiser', function(){
    var css = gulp.src('./dev/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions', 'ie 8', 'ie 9'],
            cascade: false
        }));

    var min = css.pipe(clone())
        .pipe(cssnano({discardComments: {removeAll: true}}))
        .pipe(rename('min/paradeiser.min.css'));

    return merge(css, min)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
    gulp.start('compile-paradeiser');
});