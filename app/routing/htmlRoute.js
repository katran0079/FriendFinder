var path = require("path");

module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.json(path.join(__dirname, "public/survey.html"));
  });
};
