import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'cssnano';
import plumber from 'gulp-plumber';
import flatten from 'gulp-flatten';
import sourcemaps from 'gulp-sourcemaps';
import notify from 'gulp-notify';
import gzip from 'gulp-gzip';
// import sassLint from 'gulp-sass-lint';
import rename from 'gulp-rename';
import CONFIG from '../config.js';
import dartsass from 'dart-sass';
import BROWSER from './browser.js';

sass.compiler = dartsass;

function watch() {
  return gulp.src(CONFIG.dir.src.styles, { cwd: CONFIG.dir.cwd })
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer]))
    .pipe(sourcemaps.write())
    .pipe(flatten())
    .pipe(rename(function(path) {
      path.extname = `.v${CONFIG.version}${path.extname}`;
    }))
    .pipe(gulp.dest(CONFIG.dir.dest.styles))
    .pipe(BROWSER.stream());
}

function build() {
  return gulp.src(CONFIG.dir.src.styles, { cwd: CONFIG.dir.cwd })
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(flatten())
    .pipe(rename(function(path) {
      path.extname = `.v${CONFIG.version}${path.extname}`;
    }))
    .pipe(gulp.dest(CONFIG.dir.dest.styles))
    .pipe(gzip())
    .pipe(gulp.dest(CONFIG.dir.dest.styles));
};

const STYLES = {
  build,
  watch,
};

export default STYLES;
