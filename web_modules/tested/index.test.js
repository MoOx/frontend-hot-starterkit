"use strict";

var test = require("tape")

test("hello world", function(t) {
  console.warn("I'm not a real test")

  // @todo add real test on a React component

  t.pass("I'm working")
  t.pass("I'm also working")
  t.end()
})
