import GetQnA from './GetQnA'
class SetQuestion {
  maxQuestions = 5
  questionsSubmitted = 0
  score = 0
  allQuestionIndexes = GetQnA.getQuestionIndexes
  gotQuestions = []

  setText (id, text) {
    const element = document.getElementById(id)
    element.innerText = text
  }

  setQuestion (elementId, questionId) {
    const qtext = GetQnA.getQuestion(questionId)
    this.setText(elementId, qtext)
  }

  setAnswer (elementId, questionId, answerId) {
    const atext = GetQnA.getAnswer(questionId, answerId)
    this.setText(elementId, atext)
  }

  nextQuestion () {
    if (this.questionsSubmitted === 0) {
      const qId = Math.random(0, this.allQuestionIndexes)
      this.gotQuestions.push(qId)
      this.questionsSubmitted++
    }
  }
}

export default new SetQuestion()
