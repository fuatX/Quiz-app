function UI() {
  this.btn_start = document.querySelector(".btn_start");
  this.next_btn = document.querySelector(".next_btn");
  this.quiz_box = document.querySelector(".quiz_box");
  this.option_list = document.querySelector(".option_list");
  (this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>'),
    (this.incorrectIcon =
      '<div class="icon"><i class="fas fa-times"></i></div>');
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
