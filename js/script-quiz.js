function Quiz(questions) {
  this.questions = questions;
  this.questionIndex = 0;
  //question index değerini, question içine 1.ye 0 olarak 2.ye 1 olarak döndürürerek index değeri sağlar
  this.correctAnswerNumber = 0;
}
Quiz.prototype.BringQuestion = function () {
  return this.questions[this.questionIndex];
};
