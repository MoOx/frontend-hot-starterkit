"use strict";

require("./index.html")
require("./index.css")

var React = require("react")
var HelloWorld = require("hello-world")
var HelloUniverse = require("hello-universe")

React.render(
  <div className="App">
    <HelloWorld />
    <HelloUniverse />
  </div>,
  document.getElementById("app")
)
