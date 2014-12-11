"use strict";

var path = require("path")
var webpack = require("webpack")

var nodeModulesRE = /node_modules/

// base config
var config = {
  entry: [
    "./src/index" // app real entry point
  ],
  output: {
    path: path.join(__dirname, "dist"), // Where to put build results when doing production builds
    filename: "index.js" // filename you're going to use in HTML
  },
  resolve: {
    extensions: ["", ".js", ".jsx"] // Allow to omit extensions when requiring these files
  },
  module: {
    loaders: [
    {test: /.*\.css$/, loaders: ["style", "css", "cssnext"]},
    {test: /.*\.jsx?$/, loaders: ["react-hot", "6to5", "jsx"], exclude: nodeModulesRE},
    {test: /.*\.html$/, loaders: ["file?name=[name].[ext]"]} // require a html file will put it in dist
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      __DEV__: global.DEV,
      __PROD__: !global.DEV
    })
  ],
  // https://github.com/webpack/webpack/issues/451
  // run tape test with webpack
  node: {
    fs: "empty"
  }
}

// dev config adjustment
if (global.DEV) {
  // config.devtool = "source-map"

  // this seems useless. Not sure what I use that in the first place
  // config.devServer = {
  //   contentBase: path.separator + path.dirname(config.output.publicPath) + path.separator,
  //   publicPath: config.output.publicPath
  // }

  config.devServerUrl = {}
  config.devServerUrl.protocol = process.env.npm_package_config_protocol || "http://"
  config.devServerUrl.hostname = process.env.npm_package_config_hostname || "localhost"
  config.devServerUrl.port = process.env.npm_package_config_port || 3000
  config.devServerUrl.url = config.devServerUrl.protocol + config.devServerUrl.hostname + ":" + config.devServerUrl.port

  config.entry.unshift("webpack/hot/only-dev-server") // HMR (Hot Module Replacement) runtime (server-agnostic)
  config.entry.unshift("webpack-dev-server/client?" + config.devServerUrl.url) // listens to webpack-dev-server messages and passes them to HMR runtime

  config.plugins.unshift(new webpack.NoErrorsPlugin()) // Error during build are not served in the browser
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin()) // HMR
}

module.exports = config
