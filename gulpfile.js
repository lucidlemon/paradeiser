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

var notify = require("gulp-notify");
var fs = require('fs');

var htmlreplace = require('gulp-html-replace');

var browserify = require('browserify');
//var browserify = require('browserify-middleware');
var babelify = require('babelify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var rimraf = require('rimraf');
var watchify = require('watchify');
var _ = require('lodash');
var browserSync = require('browser-sync');
var reload = browserSync.reload;



var path = {
    HTML: 'demo/index.html',
    ALL: ['demo/src/*.js', 'demo/index.html'],
    JS: ['demo/src/*.js'],
    SRC_JS: 'demo/src/js',
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'demo/src',
    DEST_BUILD: 'demo/build',
    DEST: 'demo'
};

var config = {
    entryFile: './demo/src/main.js',
    outputDir: './demo/build/',
    outputFile: 'bundle.js'
};




// clean the output directory
gulp.task('clean', function(cb){
    rimraf(config.outputDir, cb);
});

var bundler;
function getBundler() {
    if (!bundler) {
        bundler = watchify(browserify(config.entryFile, _.extend({ debug: true }, watchify.args)));
    }
    return bundler;
};

function bundle() {
    return getBundler()
        .transform(babelify)
        .bundle()
        .on('error', function(err) { console.log('Error: ' + err.message); })
        .pipe(source(config.outputFile))
        .pipe(gulp.dest(config.outputDir))
        .pipe(reload({ stream: true }));
}

gulp.task('build-persistent', ['clean'], function() {
    return bundle();
});

gulp.task('build', ['build-persistent'], function() {
    process.exit(0);
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