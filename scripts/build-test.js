"use strict";

var webModulesRE = new RegExp("web_modules/")

require("glob")("web_modules/**/*.test.js", function globTestFiles(err, files) {
  if (err) {throw err}

  if (!files.length) {
    throw new Error("No test files")
  }

  var config = require("../webpack.config")
  config.entry = files.map(function mapFiles(file) {
    return file.replace(webModulesRE, "")
  })
  config.output.filename = "test.js"

  // build a single tests.js
  require("webpack")(config, function buildTest(err, stats) {
    if (err) {throw err}

    var jsonStats = stats.toJson()
    if (jsonStats.errors.length > 0) {
      throw new Error("build-test: soft error detected: " + jsonStats.errors)
    }

    if (jsonStats.warnings.length > 0) {
      console.warn("build-test: warning detected: " + jsonStats.errors)
    }
    console.log("build-test: " + config.output.filename + " ready")
  })
})
