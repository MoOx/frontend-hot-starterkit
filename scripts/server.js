"use strict";

global.DEV = true

var config = require("../webpack.config")

// webpack dev server
var path = require("path")
var webpack = require("webpack")
var WebpackDevServer = require("webpack-dev-server")
var devServer = new WebpackDevServer(webpack(config), {
  hot: true,
  stats: {colors: true}
})
devServer.listen(config.devServerUrl.port, config.devServerUrl.hostname)

// open the app !
require("opn")(config.devServerUrl.url)
