// const modelQuestions = [
//     {Question: "q1",Answer1: "a1", Answer2: "b2", Answer3: "sony",Truth: "42"},
//     {Question: "",Answer1: "", Answer2: "", Answer3: "",Truth: ""},
//     {Question: "",Answer1: "", Answer2: "", Answer3: "",Truth: ""},
//     {Question: "",Answer1: "", Answer2: "", Answer3: "",Truth: ""},
// ]
const questionMatrix = [
    // ["Question", "Answer1", "Answer2", "Answer3", "Answer4", "Index of correct answer(int)"],
    ['Q1', 'A1', 'B1', 'C1', 'D1', 2],
    ['Q2', 'A2', 'B2', 'C2', 'D2', 4],
    ['Q3', 'A3', 'B3', 'C3', 'D3', 3]
]
let qCount = 0

class GetQnA {
    getQuestion(questionId) {
        return questionMatrix[questionId][0]
    }

    getAnswer(questionId, answerId) {
        return questionMatrix[questionId][answerId]
    }

    checkAnswer(questionId, answerId) {
        let answer = questionMatrix[questionId][answerId]
        let solution = questionMatrix[questionId][questionMatrix.length - 1]
        if (answerId === solution) {
            return true
        } else {
            return false
        }
    }
}

export default new GetQnA()
