import gulp from 'gulp';
import CONFIG from './config.js';
import BROWSER from './tasks/browser.js';
import CLEAN from './tasks/clean.js';
import GRAPHICS from './tasks/graphics.js';
import MARKUP from './tasks/markup.js';
import SCRIPTS from './tasks/scripts.js';

import STYLES from './tasks/styles.js';

export const watch = () => {
  
  CLEAN.cleanup();
  STYLES.watch();
  SCRIPTS.watch();
  GRAPHICS.watch();
  MARKUP.watch();
  
  BROWSER.init();

  gulp.watch(CONFIG.dir.src.markup, { cwd: CONFIG.dir.cwd }, MARKUP.watch).on('change', function() { BROWSER.reload() });
  gulp.watch(CONFIG.dir.src.graphics, { cwd: CONFIG.dir.cwd }, GRAPHICS.watch).on('change', function() { BROWSER.reload() });
  gulp.watch(CONFIG.dir.src.styles, { cwd: CONFIG.dir.cwd }, STYLES.watch);
  gulp.watch(CONFIG.dir.src.scripts.glob, { cwd: CONFIG.dir.cwd }, SCRIPTS.watch);
};

export const build = gulp.series([CLEAN.cleanup, gulp.parallel([STYLES.build, SCRIPTS.build, GRAPHICS.build]), MARKUP.build]);

export default watch;
