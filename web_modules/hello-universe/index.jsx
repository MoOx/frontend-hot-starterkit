"use strict";

var foo

require("cssrecipes-tooltip")
require("./index.css")

var React = require("react")

module.exports = React.createClass({
  render() {
    return (
      <div className="HelloUniverse r-Tooltip" contentEditable="true" data-r-tooltip="Hi universe!">Hello Universe !</div>
    )
  }
})
