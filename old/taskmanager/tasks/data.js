import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import CONFIG from '../config.js';

function watch() {
  console.log(`
  
  👀 👀 watch data files 👀 👀 ${CONFIG.dir.src.data}
  
  `);

  return gulp.src(CONFIG.dir.src.data, { cwd: CONFIG.dir.cwd })
    .pipe(gulp.dest(CONFIG.dir.dest.data));
}

function build() {
  console.log(`

    🛠 🛠 start building data files 🛠 🛠 
    from: ${CONFIG.dir.src.data} to: ${CONFIG.dir.dest.data}

  `);

  return gulp.src(CONFIG.dir.src.data, { cwd: CONFIG.dir.cwd })
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(gulp.dest(CONFIG.dir.dest.data));
}

const DATA = {
  watch,
  build,
};

export default DATA;
