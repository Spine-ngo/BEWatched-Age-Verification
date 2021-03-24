import PACKAGE from '../package.json';

const CONFIG = {
  version: PACKAGE.version,
  dir: {
    cwd: '../src',
    src: {
      styles: '**/*.scss',
      scripts: {
        glob: 'scripts/**/*.js',
        main: 'scripts/bewatched-age-verification.js',
      },
      graphics: '**/*.{png,jpg,gif}',
      markup: '**/*.html'
    },
    dest: {
      styles: '../public/',
      scripts: '../public/',
      graphics: '../public/',
      markup: '../public/',
      clean: '../public/*',
    },
  },
  browser: {
    server: {
      baseDir: '../public',
    },
    port: 3000,
    https: true,
  }
};

export default CONFIG;
