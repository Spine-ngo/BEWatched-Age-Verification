import CONFIG from './config.js';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import PACKAGE from '../package.json';

const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

export default {
  entry: {
    'bewatched-age-verification': path.resolve(__dirname, CONFIG.dir.cwd, CONFIG.dir.src.scripts.main)
  },
  output: {
    path: path.resolve(__dirname, CONFIG.dir.cwd, CONFIG.dir.dest.scripts),
    filename: `[name].v${PACKAGE.version}.js`
  },
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        test: /\.js$/,
        uglifyOptions: {
          verbose: true,
        },
      }),
    ],
  },
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
