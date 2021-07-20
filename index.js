var readlineSync = require('readline-sync');
var score = 0;
console.log('Know Game');

var questionSet = [{
  question: "What is the capital of India? ",
  answer: "delhi"
}, {
  question: "What is the finantial capital of India? ",
  answer: "mumbai"
},
{
  question: "Which city is called sillicon Vally of India? ",
  answer: "benglore"
},
{
  question: "Who is PM of India? ",
  answer: "narendra modi"
},
{
  question: "In which city TajMahal is located? ",
  answer: "agra"
}];

var highScores = [
  {
    name: "Rushikesh",
    score: 4,
  },
  {
    name: "Ashitosh",
    score: 2,
  }
];

function game(question, answer) {
  var ans = readlineSync.question(question);

  if (ans.toLowerCase() == answer.toLowerCase()) {
    score += 1;
    console.log("right!");
  }
  else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("--------------------------");
}

var playerName = readlineSync.question('What is your name? ');
console.log('Hi ' + playerName + ' Welcome to Do you know India?');

for (i = 0; i < questionSet.length; i++) {
  game(questionSet[i].question, questionSet[i].answer);
}

console.log("Your Final score ", score);

for (i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name, " : ", highScores[i].score);
}