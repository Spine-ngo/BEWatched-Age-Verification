import gulp from 'gulp';
import chalk from 'chalk';
import webpack from 'webpack-stream';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gzip from 'gulp-gzip';

import CONFIG from '../config.js';
import WDEVCONFIG from '../webpack.config.dev.js';
import WPRDCONFIG from '../webpack.config.js';
import BROWSER from './browser.js';

function watch() {
  console.log(`
  
  👀 👀 watch scripts 👀 👀 ${CONFIG.dir.src.scripts.glob}
  
  `);

  return gulp.src(CONFIG.dir.src.scripts.glob, { cwd: CONFIG.dir.cwd })
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(webpack(WDEVCONFIG))
    .pipe(gulp.dest(CONFIG.dir.dest.scripts))
    .pipe(BROWSER.stream());
}

function build() {
  console.log(`

    🛠 🛠 start building scripts 🛠 🛠 
    from: ${CONFIG.dir.src.scripts.glob} to: ${CONFIG.dir.dest.scripts} using version: ${chalk.green(`v${CONFIG.version}`)}

  `);

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
