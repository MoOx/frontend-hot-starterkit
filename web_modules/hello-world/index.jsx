"use strict";

require("cssrecipes-tooltip")
require("./index.css")

var React = require("react")

module.exports = React.createClass({
  render(){
    return (
      <div className="HelloWorld r-Tooltip" contentEditable="true" data-r-tooltip="Hi world!">Hello World!</div>
    )
  }
})
