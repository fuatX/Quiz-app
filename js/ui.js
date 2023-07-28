function UI() {
  this.btn_start = document.querySelector(".btn_start");
  this.next_btn = document.querySelector(".next_btn");
  this.quiz_box = document.querySelector(".quiz_box");
  this.option_list = document.querySelector(".option_list");
  (this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>'),
    (this.incorrectIcon =
      '<div class="icon"><i class="fas fa-times"></i></div>'),
    (this.score_box = document.querySelector(".score_box"));
  (this.btn_replay = document.querySelector(".btn_replay")),
    (this.time_text = document.querySelector(".time_text")),
    (this.time_second = document.querySelector(".time_second")),
    (this.btn_quit = document.querySelector(".btn_quit"));
}

UI.prototype.showQuestion = function (question) {
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
  this.option_list.innerHTML = options;

  const option = this.option_list.querySelectorAll(".option");

  for (let opt of option) {
    // console.log(opt); her bir şıkka div olarak ulaştın
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};

UI.prototype.showNumberofQuestions = function (questionNumber, totalQuestion) {
  let tag = `<span class="badge bg-warning">${questionNumber} / ${totalQuestion}</span> `;

  document.querySelector(".quiz_box .question_index").innerHTML = tag;
};

UI.prototype.showResult = function (totalQuestion, correctAnswer) {
  let tag = `Toplam ${totalQuestion} sorudan ${correctAnswer} doğru cevap verdiniz.`;
  document.querySelector(".score_box .score_text").innerHTML = tag;
};
