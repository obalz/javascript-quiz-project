class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    if (
      !Array.isArray(questions) ||
      questions.length === 0 ||
      typeof timeLimit !== "number" ||
      typeof timeRemaining !== "number"
    ) {
      throw new Error("Invalid input, HAHA");
    }

    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    let randomIndice = [];
    while (randomIndice.length < this.questions.length) {
      const idx = Math.floor(Math.random() * this.questions.length);
      if (!randomIndice.includes(idx)) {
        randomIndice.push(idx);
      }
    }

    let meQuestions = [];
    randomIndice.forEach((element) =>
      meQuestions.push(this.questions[element])
    );
    this.questions = meQuestions;
  }

  checkAnswer(answer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion.answer === answer) {
        this.correctAnswers ++;
    }
  }
  hasEnded(){
    return this.currentQuestionIndex === this.questions.length ;
  }
}
