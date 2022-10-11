## JetBrains IDE Setup

### Requirements
  - [Node.js](https://nodejs.org/en/)


  - [FileWatcher](https://plugins.jetbrains.com/plugin/7177-filewatcher) - JetBrains IDE Plugin
  - [PostCSS](https://plugins.jetbrains.com/plugin/8578-postcss) - JetBrains IDE Plugin


  - [PostCSS](https://www.npmjs.com/package/postcss) - `npm install -g postcss`
  - [PostCSS-CLI](https://www.npmjs.com/package/postcss-cli) - `npm install -g postcss-cli`
  - [Autoprefixer](https://www.npmjs.com/package/autoprefixer) - `npm install -g autoprefixer`
  - [PostCSS Nested](https://www.npmjs.com/package/postcss-nested) - `npm install -g postcss-nested`

    
`npm install -g postcss postcss-cli autoprefixer postcss-nested`

### Setup
Setup for JetBrains product.

1. `git clone https://github.com/Spine-ngo/BEWatched-Age-Verification.git`
    - checkout `AgeVerification/new` branch
2. `npm install`
3. FileWatcher Setup
    - Open `File > Settings > Tools > File Watchers`
    - Click `+` to add a new watcher
    - Name: `PostCSS`
    - File Type: `PostCSS Stylesheet`
    - Scope: `Project Files`
    - Program: `postcss`
    - Arguments: `$FilePath$ --use=autoprefixer --use=postcss-nested -b 'last 4 versions' -m -o $FileNameWithoutExtension$.css`
    - Click `OK`