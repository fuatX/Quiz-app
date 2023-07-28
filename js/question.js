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
    "1-Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Question(
    "2-Hangisi frontend kapsamında değerlendirilmez?",
    { a: "Css", b: "Html", c: "Javascript", d: "SQL" },
    "d"
  ),
  new Question(
    "3-Hangisi backend kapsamında değerlendirlebilir?",
    { a: "Node.js", b: "Typescript", c: "Angular", d: "React" },
    "a"
  ),
  new Question(
    "4-Hangisi javascript programlama dilini kullanmaz?",
    { a: "React", b: "Vuejs", c: "Angular", d: "Asp.net" },
    "d"
  ),
];
