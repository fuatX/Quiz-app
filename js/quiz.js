// let Question = {
//   questionText: "Hangisi Javascript paket yönetim uygulamasıdır?",
//   answerOptions: {
//     a: "Node.js",
//     b: "Typescript",
//     c: "Npm",
//   },
//   correctAnswer: "c",
//   checkAnswer: function (answer) {
//     return answer === this.correctAnswer;
//   },
// };

function Question(questionText, answerOptions, correctAnswer) {
  this.questionText = questionText;
  this.answerOptions = answerOptions;
  this.correctAnswer = correctAnswer;
  //   this.checkAnswer = function (answer) {
  //     return answer === this.correctAnswer;
  //   };
  //   console.log(this);
}

let question1 = new Question(
  "Hangisi Javascript paket yönetim uygulamasıdır?",
  { a: "Node.js", b: "Typescript", c: "Npm" },
  "c"
);

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

function Quiz(questions) {
  this.questions = questions;
  this.questionIndex = 0;
  //question index değerini, question içine 1.ye 0 olarak 2.ye 1 olarak döndürürerek index değeri sağlar
}

const quiz = new Quiz(questions);

Quiz.prototype.BringQuestion = function () {
  return this.questions[this.questionIndex];
};

// quiz.questionIndex += 1;
// console.log(quiz.BringQuestion());

document.querySelector(".btn_start").addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex) {
    document.querySelector(".quiz_box").classList.add("active");
    console.log(quiz.BringQuestion());
    quiz.questionIndex += 1;
  } else {
    console.log("Quiz bitti");
  }
});
