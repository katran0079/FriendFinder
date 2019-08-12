var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends"),
    function(req, res) {
      res.JSON.FRIENDS;
    };
};

app.post("/api/friends"),
  function(req, res) {
    console.log(req.body.scores);
    var user = req.body;
    for (var i = 0; i < user.scores.length; i++) {
      var userScores = parseInt(user.scores[i]);
    }
  };

var bestieScore = 0;

for (var i = 0; i < friends.scores[i]; i++) {
  var totalDiff = 0;
}
