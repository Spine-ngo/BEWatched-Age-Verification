import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import CONFIG from '../config.js';
import BROWSER from './browser.js';

function watch() {
  return gulp.src(CONFIG.dir.src.markup, { cwd: CONFIG.dir.cwd })
    .pipe(gulp.dest(CONFIG.dir.dest.markup))
    // .pipe(BROWSER.reload());
}

function build() {
  return gulp.src(CONFIG.dir.src.markup, { cwd: CONFIG.dir.cwd })
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(gulp.dest(CONFIG.dir.dest.markup));
}

const MARKUP = {
  watch,
  build,
};

export default MARKUP;
