function Question(questionText, answerOptions, correctAnswer) {
  this.questionText = questionText;
  this.answerOptions = answerOptions;
  this.correctAnswer = correctAnswer;
  //   this.checkAnswer = function (answer) {
  //     return answer === this.correctAnswer;
  //   };
  //   console.log(this);
}

// let question1 = new Question(
//   "Hangisi Javascript paket yönetim uygulamasıdır?",
//   { a: "Node.js", b: "Typescript", c: "Npm" },
//   "c"
// );

Question.prototype.checkAnswer = function (answer) {
  return answer === this.correctAnswer;
};

let questions = [
  new Question(
    "1-Hangisi js paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Question(
    "2-Hangisi js paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Question(
    "3-Hangisi js paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Question(
    "4-Hangisi js paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
];
