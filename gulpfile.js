const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const merge = require("merge-stream");
const { src, series, parallel, dest, watch } = require('gulp');

const jsPath = 'src/js/**/*.js';
const cssPath = 'src/css/**/*.css';

function copyHtml() {
  return src('src/*.html').pipe(gulp.dest('dist'));
}

function copyResources() {
  return src('src/resources/*').pipe(gulp.dest('dist/resources'));
}

function copyResources() {
  return src('src/resources/*').pipe(gulp.dest('dist/resources'));
}

function imgTask() {
  return src('src/img/**/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
}

// Clean vendor
function clean() {
  return del(["./dist/"]);
}

// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // Bootstrap
  var bootstrap = gulp.src('./node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest('dist/modules/bootstrap'));
  // jQuery
  var jquery = gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('dist/modules/jquery'));
    
  var fonts = gulp.src('./node_modules/font-awesome/*')
        .pipe(gulp.dest('dist/modules/font-awesome'));

  return merge(bootstrap, jquery, fonts);
}

function jsTask() {
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/js'));
}

function cssTask() {
  return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer(), cssnano()])) //not all plugins work with postcss only the ones mentioned in their documentation
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'));
}

function watchTask() {
  watch([cssPath, jsPath], { interval: 1000 }, parallel(cssTask, jsTask));
}

exports.modules = modules;
exports.copyResources = copyResources;
exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.imgTask = imgTask;
exports.copyHtml = copyHtml;
exports.default = series(
  parallel(copyHtml, copyResources, imgTask, jsTask, cssTask, modules),
  watchTask
);