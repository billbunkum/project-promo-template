*Some Basics to Remember*
+ babel compiles ES6 (and JSX) into browser-readable ES5. Babel does not *do* anything by itself, it needs a 'preset' to do it: for example, *'react'* preset and *'env'* preset.

  Generating *package.json* - Babel says to do this FIRST
  $ yarn init
  - similar to *nvm* as it sets up a way to have dependencies, i.e. package.json

  $ npm install --save-dev @babel/core @babel/cli 
  - now can run 'babel' command, $ babel --help

  - Installing *Babel presets*
  $ yarn add --save-dev @babel/preset-env @babel/preset-react 
  OR $ npm install ...as above

  - Manually running *Babel compile*
  $ ./node_modules/.bin/babel src --out-dir public/scripts/ --presets=@babel/env,@babel/react --watch

+ live-server is a tool for running a local server to test the page
+ Node, NPM, Yarn help install things
+ */public/scripts/* is where the generated code lives, and it is what the Browser sees
  *src/* is where the code I edit lives, and it is then compiled using Babel

+ Links
babel [https://babeljs.io/]
babel src/app.js -o /public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react
