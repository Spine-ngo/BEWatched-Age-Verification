import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import CONFIG from '../config.js';

function watch() {
  console.log(`
  
  👀 👀 watch markup files 👀 👀 ${CONFIG.dir.src.markup}
  
  `);

  return gulp.src(CONFIG.dir.src.markup, { cwd: CONFIG.dir.cwd })
    .pipe(gulp.dest(CONFIG.dir.dest.markup))
    // .pipe(BROWSER.reload());
}

function build() {
  console.log(`

    🛠 🛠 start building markup files 🛠 🛠 
    from: ${CONFIG.dir.src.markup} to: ${CONFIG.dir.dest.markup}

  `);

  return gulp.src(CONFIG.dir.src.markup, { cwd: CONFIG.dir.cwd })
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(gulp.dest(CONFIG.dir.dest.markup));
}

const MARKUP = {
  watch,
  build,
};

export default MARKUP;
