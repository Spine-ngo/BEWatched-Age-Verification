import gulp from 'gulp';
import webpack from 'webpack-stream';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gzip from 'gulp-gzip';
import CONFIG from '../config.js';
import WDEVCONFIG from '../webpack.config.dev.js';
import WPRDCONFIG from '../webpack.config.js';
import BROWSER from './browser.js';

function watch() {
  return gulp.src(CONFIG.dir.src.scripts.glob, { cwd: CONFIG.dir.cwd })
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(webpack(WDEVCONFIG))
    .pipe(gulp.dest(CONFIG.dir.dest.scripts))
    .pipe(BROWSER.stream());
}

function build() {
  return gulp.src(CONFIG.dir.src.scripts.glob, { cwd: CONFIG.dir.cwd })
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(webpack(WPRDCONFIG))
    .pipe(gulp.dest(CONFIG.dir.dest.scripts))
    .pipe(gzip())
    .pipe(gulp.dest(CONFIG.dir.dest.scripts));
}

const SCRIPTS = {
  watch,
  build,
};

export default SCRIPTS;
