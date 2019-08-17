var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: ""
    };

    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var y = userScores.map(function(item) {
      var parsedNum = parseInt(item, 10);
      console.log("parsedNum" + parsedNum);
      return parsedNum;
    });

    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: y
    };

    console.log("Name: " + userName);
    console.log("User Score " + userScores);

    var buddyScores = [];
    for (var i = 0; i < friends.length; i++) {
      var finalScore = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(userScores[j] - friends[i].scores[j]);
        finalScore += difference;
      }
      buddyScores.push(finalScore);
      console.log(buddyScores);
    }
    var x = Math.min.apply(Math, buddyScores);
    console.log("Lowest Number: " + x);
    var z = buddyScores.indexOf(x);
    console.log(friends[z].name);

    bestMatch.name = friends[z].name;
    bestMatch.photo = friends[z].photo;

    console.log(bestMatch);

    friends.push(userData);
    console.log("New user added");
    console.log(userData);
    res.json(bestMatch);
  });
};
