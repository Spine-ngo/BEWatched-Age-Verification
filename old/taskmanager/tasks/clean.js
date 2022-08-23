import del from 'del';
import CONFIG from '../config.js';
import chalk from 'chalk';

function cleanup() {
  const folders = CONFIG.dir.dest.clean;
  console.log(`

  🧹 🧹 ${chalk.green('Cleanup folders:')} 🧹 🧹 ${folders}

  `);
  return del(folders, { force: true });
}

const CLEAN = {
  cleanup,
};

export default CLEAN;
