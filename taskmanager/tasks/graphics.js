import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import flatten from 'gulp-flatten';
import plumber from 'gulp-plumber';
import webp from 'gulp-webp';
import notify from 'gulp-notify';
import CONFIG from '../config.js';

function watch() {
  console.log(`
  
  👀 👀 watch graphics 👀 👀 ${CONFIG.dir.src.graphics}
  
  `);

  return gulp.src(CONFIG.dir.src.graphics, { cwd: CONFIG.dir.cwd })
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      }),
    ], {
      verbose: true
    }))
    .pipe(flatten({ includeParents: -1}))
    .pipe(gulp.dest(CONFIG.dir.dest.graphics))
    .pipe(webp())
    .pipe(gulp.dest(CONFIG.dir.dest.graphics));
}

function build() {
  console.log(`

    🛠 🛠 start building graphics 🛠 🛠 
    from: ${CONFIG.dir.src.graphics} to: ${CONFIG.dir.dest.graphics}

  `);

  return gulp.src(CONFIG.dir.src.graphics, { cwd: CONFIG.dir.cwd })
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      }),
    ], {
      verbose: true
    }))
    .pipe(flatten({ includeParents: -1}))
    .pipe(gulp.dest(CONFIG.dir.dest.graphics))
    .pipe(webp())
    .pipe(gulp.dest(CONFIG.dir.dest.graphics));
}

const GRAPHICS = {
  watch,
  build,
};

export default GRAPHICS;
