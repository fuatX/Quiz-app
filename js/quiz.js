const quiz = new Quiz(questions);
const ui = new UI();

// quiz.questionIndex += 1;
// console.log(quiz.BringQuestion());

ui.btn_start.addEventListener("click", function () {
  ui.quiz_box.classList.add("active");
  startTimer(10);
  let question = quiz.BringQuestion();
  ui.showQuestion(question);
  ui.showNumberofQuestions(quiz.questionIndex + 1, quiz.questions.length);
  ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex += 1;
    clearInterval(counter);
    startTimer(10);
    let question = quiz.BringQuestion();
    ui.showQuestion(question);
    ui.showNumberofQuestions(quiz.questionIndex + 1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
  } else {
    console.log("Quiz bitti");
    clearInterval(counter);
    ui.score_box.classList.add("active");
    ui.quiz_box.classList.remove("active");
    ui.showResult(quiz.questions.length, quiz.correctAnswerNumber);
  }
});

ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
});

ui.btn_replay.addEventListener("click", function () {
  quiz.questionIndex = 0;
  quiz.correctAnswerNumber = 0;
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
});

// const option_list = document.querySelector(".option_list");
// const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
// const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function optionSelected(option) {
  clearInterval(counter);
  let answer = option.querySelector("span b").textContent; //text content a,b,c
  let question = quiz.BringQuestion();
  // console.log(question);

  if (question.checkAnswer(answer)) {
    quiz.correctAnswerNumber++;
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

let counter;

function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    // console.log("saniyede bir");
    ui.time_second.textContent = time;
    time--;

    if (time < 0) {
      clearInterval(counter);

      ui.time_text.textContent = "Zaman Doldu";

      let answer = quiz.BringQuestion().correctAnswer;

      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == answer) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }

        option.classList.add("disabled");
      }
      ui.next_btn.classList.add("show");
    }
  }
}
