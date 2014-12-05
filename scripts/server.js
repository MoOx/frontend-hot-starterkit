"use strict";

global.DEV = true

var config = require("../webpack.config")

/**
 * webpack dev server
 */
function webpackServer() {
  var path = require("path")
  var webpack = require("webpack")
  var WebpackDevServer = require("webpack-dev-server")
  var devServer = new WebpackDevServer(webpack(config), {
    hot: true,
    stats: {colors: true}
  })
  devServer.listen(config.devServerUrl.port, config.devServerUrl.hostname)
}

/**
 * run "test" on each changes
 */
function runTestOnEachChanges() {
  var spawn = require("child_process").spawn
  var gaze = require("gaze")
  var pwd = process.cwd()
  var matches = [
    "**/*.css",
    "**/*.js",
    "**/*.jsx",
    "!**/node_modules/**"
  ]
  console.log("Watching", matches.join(", "))
  gaze(matches, function() {
    var running = false
    this.on("all", function (type, file) {
      if (running) {
        return
      }
      running = true
      console.log(type, file.replace(pwd, ""))

      spawn(
        "npm",
        ["test"],
        {stdio: ["ignore", process.stdout, process.stderr]}
      )
      .on("close", function (code) {
        running = false
      })
    })
  })
}

webpackServer()
runTestOnEachChanges()

// open the app !
require("opn")(config.devServerUrl.url)
