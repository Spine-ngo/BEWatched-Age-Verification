import CONFIG from './config.js';
import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import PACKAGE from '../package.json';

const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

export default {
  entry: {
    'bewatched-age-verification': path.resolve(__dirname, CONFIG.dir.cwd, CONFIG.dir.src.scripts.main),
    'bewatched-options': path.resolve(__dirname, CONFIG.dir.cwd, CONFIG.dir.src.scripts.options),
  },
  output: {
    path: path.resolve(__dirname, CONFIG.dir.cwd, CONFIG.dir.dest.scripts),
    filename: `[name].v${PACKAGE.version}.js`
  },
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [new ESLintPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
}
