const quiz = new Quiz(questions);
const ui = new UI();

// quiz.questionIndex += 1;
// console.log(quiz.BringQuestion());

ui.btn_start.addEventListener("click", function () {
  ui.quiz_box.classList.add("active");
  let question = quiz.BringQuestion();
  ui.showQuestion(question);
  ui.showNumberofQuestions(quiz.questionIndex + 1, quiz.questions.length);
  ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex += 1;
    let question = quiz.BringQuestion();
    ui.showQuestion(question);
    ui.showNumberofQuestions(quiz.questionIndex + 1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
  } else {
    console.log("Quiz bitti");
  }
});

// const option_list = document.querySelector(".option_list");
// const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
// const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function optionSelected(option) {
  let answer = option.querySelector("span b").textContent; //text content a,b,c
  let question = quiz.BringQuestion();
  // console.log(question);

  if (question.checkAnswer(answer)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }

  ui.next_btn.classList.add("show");
}
