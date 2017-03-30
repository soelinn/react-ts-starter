# Description
Starter project template for React app with TypeScript.

### Separate Config Files

Refer to https://webpack.js.org/guides/production/#setup.
There are three `webpack.*.js` files in the project setup.
* `webpack.config.js` - shared config
* `webpack.dev.js` - development config
* `webpack.prod.js` - production config

Instead of running the webpack with the `--mode` for different build config, using multiple webpack config files gives the most flexibility. `webpack-merge` plugin is used to combine the configurations at build time.


### webpack-dev-server

`webpack-dev-server` hosts the React component root during development.  

`index.html` template file is registered with `HtmlWebpackPlugin` plugin, which hands off its output to the `webpack-dev-server` at runtime.

-----

## Install

Execute this to get everything ready.

```
npm install
```

## Run

This command runs the `webpack-dev-server` to dynamically host the `webpack`'s output.

```
npm run start:dev
```

## Build

```
# This will compile the project in development mode WITHOUT optimizations.
npm run build
```


```
# This will compile the project in development mode WITH optimizations.
npm run build:prod
```

#### Reference

* https://webpack.js.org/concepts/mode/#mode-production
* https://webpack.js.org/guides/production/#minification

## Clean

```
npm run clean
```
