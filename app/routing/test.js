var user = {
  name: "Buddy",
  scores: [1, 2, 3, 4, 5]
};

var friends = [
  {
    name: "Tim",
    scores: [3, 3, 4, 5, 6]
  },
  {
    name: "Bruce",
    scores: [2, 3, 3, 4, 5]
  }
];

// var testing = Math.min.apply(Math, user.scores);
// console.log(Math.min.apply(Math, user.scores));
// console.log(
//   "Position: " + user.scores.indexOf(Math.min.apply(Math, user.scores))
// );
var buddyScores = [];
function test() {
  for (var i = 0; i < friends.length; i++) {
    var totalDifference = 0;
    for (var j = 0; j < friends[i].scores.length; j++) {
      var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
      totalDifference += difference;
      finalScore = totalDifference;
    }
    buddyScores.push(finalScore);
    console.log(buddyScores);
  }
  var x = Math.min.apply(Math, buddyScores);
  console.log("Lowest Number: " + x);
  var z = buddyScores.indexOf(x);
  console.log(friends[z].name);
}
test();
