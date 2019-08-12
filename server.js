var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/api.js");
require("./app/routing/htmlRoute.js");
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
