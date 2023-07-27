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
  document.querySelector(".quiz_box").classList.add("active");
  let question = quiz.BringQuestion();
  showQuestion(question);
  document.querySelector(".next_btn").classList.remove("show");
});

document.querySelector(".next_btn").addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex += 1;
    let question = quiz.BringQuestion();
    showQuestion(question);
    document.querySelector(".next_btn").classList.remove("show");
  } else {
    console.log("Quiz bitti");
  }
});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function showQuestion(question) {
  let questionInside = `<span>${question.questionText}</span>`;
  let options = "";
  //for get the key  using "in" here
  for (let answer in question.answerOptions) {
    options += `
     <div class="option">
     <span>
     <b>${answer}</b>: ${question.answerOptions[answer]}
     </span>
     
     </div>

     `;
  }

  document.querySelector(".question_text").innerHTML = questionInside;
  option_list.innerHTML = options;

  const option = option_list.querySelectorAll(".option");

  for (let opt of option) {
    // console.log(opt); her bir şıkka div olarak ulaştın
    opt.setAttribute("onclick", "optionSelected(this)");
  }
}
function optionSelected(option) {
  let answer = option.querySelector("span b").textContent; //text content a,b,c
  let question = quiz.BringQuestion();
  // console.log(question);

  if (question.checkAnswer(answer)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", incorrectIcon);
  }

  for (let i = 0; i < option_list.children.length; i++) {
    option_list.children[i].classList.add("disabled");
  }

  document.querySelector(".next_btn").classList.add("show");
}
