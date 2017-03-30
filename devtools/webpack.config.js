const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const projectRoot = process.cwd();

module.exports = {
  // reference (https://webpack.js.org/concepts/mode/)
  mode: "development",

  // reference (https://webpack.js.org/guides/development/#source-maps)
  // We don't want source map files generated for our dependencies (i.e., vendor.js).
  // Utilize the `webpack.SourceMapDevToolPlugin` to generate source map for our code only.
  devtool: false,

  // since we are using webpack-stylish for console output,
  // tell webpack not to write its own default output.
  stats: "none",

  devServer: {
    contentBase: path.resolve(projectRoot, "dist")
  },

  // reference (https://webpack.js.org/configuration/resolve/#resolve)
  resolve: {
    // reference (https://webpack.js.org/configuration/resolve/#resolve-extensions)
    // must override to include JSX and TypeScript files
    extensions: [".js", ".json", ".ts", ".tsx"],
    // files in the [src] directory can be referenced as `import whatever from ~/file-name`.
    alias: {
      "~": path.resolve(projectRoot, "src")
    }
  },

  // reference (https://webpack.js.org/configuration/entry-context/#entry)
  entry: {
    // reference (https://webpack.js.org/concepts/entry-points/)
    app: path.resolve(projectRoot, "src/index.tsx")
    // add additional entry points here as needed
  },

  // reference (https://webpack.js.org/concepts/output/)
  output: {
    path: path.resolve(projectRoot, "dist"),
    filename: "[name].js" /* example output filename: app.bundle.js */
  },

  // `externals` tells webpack not to include the modules listed here in the JavaScript output bundle.
  // This is useful if you are including these from a CDN in your HTML page to reduce your JavaScript bundle output size.
  // reference (https://webpack.js.org/configuration/externals/#externals)
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },

  module: {
    // reference (https://webpack.js.org/concepts/loaders/)
    rules: [
      {
        // run ts-lint on TypeScript source files before the transpilation process
        test: /\.tsx?$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "tslint-loader"
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        // used for including fonts and images referenced from css files
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: "file-loader",
        options: {
          outputPath: "css/assets",
          publicPath: "assets/",
          name: "[name].[ext]"
        }
      }
    ]
  },

  optimization: {
    // reference (https://webpack.js.org/configuration/optimization/#optimization-runtimechunk)
    // This produces a single output file for Webpack runtime
    // that is shared if there were multiple entries (https://webpack.js.org/configuration/entry-context/#entry).
    runtimeChunk: "single",

    // reference (https://webpack.js.org/configuration/optimization/#optimization-splitchunks)
    splitChunks: {
      chunks: "all",
      // reference (https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-cachegroups)
      cacheGroups: {
        default: false,
        // This [vendor] chunk includes modules from node_modules folder
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    // reference (https://webpack.js.org/plugins/provide-plugin/)
    // We are using `whatwg-fetch` instead of `jQuery` for AJAX.
    // We need to make it available in the global scope.
    new webpack.ProvidePlugin({
      Promise: "es6-promise",
      fetch:
        "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "React TypeScript Starter",
      xhtml: true
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
      exclude: ["vendor.js", "runtime.js"]
    })
  ]
};
