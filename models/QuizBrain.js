class QuizzBrain {
  get questions() {
    return [
      {
        question:
          'W jakim dniu obchodzimy międzynarodowy dzień walki z depresją?',
        answers: {
          a: '23 luty',
          b: '30 marca',
          c: "Nie ma takiego dnia",
          d: "3 stycznia"
        },
        correct: 'a'
      },
    ]
  }

  getCorrectAnswer(questionNum) {
    return this.questions[questionNum].correct;
  }

  checkAnswer(questionNum, userAnswer) {
    const correctAnswer = this.getCorrectAnswer(questionNum);
    return correctAnswer === userAnswer;
  }
}

export default QuizzBrain;