import gulp from 'gulp';
import chalk from 'chalk';
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
import dartsass from 'dart-sass';

import CONFIG from '../config.js';
import BROWSER from './browser.js';

sass.compiler = dartsass;

function watch() {
  console.log(`
  
  👀 👀 watch styles 👀 👀 ${CONFIG.dir.src.styles}
  
  `);
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
  console.log(`

    🛠 🛠 start building styles 🛠 🛠 
    from: ${CONFIG.dir.src.styles} to: ${CONFIG.dir.dest.styles} using version: ${chalk.green(`v${CONFIG.version}`)}

  `);
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
