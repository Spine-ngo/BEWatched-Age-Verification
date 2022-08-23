# Task manager for BeWatched Age Verification

This project uses a combination of Gulp and Webpack to optimize resources.

## Configuration
The `config.js` file holds all configurable settings to set-up the task manager.

- **version**: files will get a suffix with a specific version number, to avoid overwrites when files get updated on the CDN. This version is automatically hoisted from the package.json version.
- **dir**: all directories for input and output
- **browser**: configuration object to overwrite the default browser-sync set-up of this task manager

## Specific functionalities
- **javascript**: The main gulp setup can use `ES6` imports as it's configured as a "module" in the package.json. This project also uses `Babel` to enable new ES6/7 features in the src/*.js files. Javascript is compiled using webpack, for better optimisation.
- **css**: This project uses `Sass` as a CSS preprocessor. To speed up the compilation, the 'dart sass' compiler is used.
- **images**: Images are optimized using `imagemin`. Also, for .jpeg and .png images, a webp version is generated.

JS and CSS files are also compressed using `gzip` in a separate file, for optional usage.

## Available Commands
### `npm install` or `yarn`
Installs all necessary packages for this task manager. This will also be triggered when you run the `start` command.

### `npm run start` or `yarn start`
Runs the `dev` command, but has a 'pre_start' hook that triggers the install command.

### `npm run dev` or `yarn dev`
Starts browsersync and watches `.html`, `.scss`, `.js`, `.{png,jpg,svg}` files in the `src` folder and outputs in the `public` folder. You can specify the paths and cwd in the `config.js` file.

### `npm run build` or `yarn build`
Builds the `.html`, `.scss`, `.js`, `.{png,jpg,svg}` files in the `src` folder and outputs in the `public` folder. This process will minify and optimize all resources.
