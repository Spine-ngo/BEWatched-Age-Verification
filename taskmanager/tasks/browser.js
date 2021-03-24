import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import browsersync from 'browser-sync';
import CONFIG from '../config.js';
import WPRDCONFIG from '../webpack.config.js';

const bs = browsersync.create();

function init() {
  const bundler = webpack(WPRDCONFIG);

  const options = {
    port: 9999,
    online: true,
    notify: false,
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false,
    },
    middleware: [
      webpackDevMiddleware(bundler, { /* options */ }),
    ],
    ...CONFIG.browser
  };

  return bs.init(options);
}

const BROWSER = {
  init,
  stream: function() { return bs.stream() },
  reload: function() { return bs.reload() },
};

export default BROWSER;
