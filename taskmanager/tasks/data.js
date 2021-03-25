import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import CONFIG from '../config.js';

function watch() {
  return gulp.src(CONFIG.dir.src.data, { cwd: CONFIG.dir.cwd })
    .pipe(gulp.dest(CONFIG.dir.dest.data));
}

function build() {
  return gulp.src(CONFIG.dir.src.data, { cwd: CONFIG.dir.cwd })
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(gulp.dest(CONFIG.dir.dest.data));
}

const DATA = {
  watch,
  build,
};

export default DATA;
