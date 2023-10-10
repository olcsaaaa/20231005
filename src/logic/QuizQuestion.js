// const modelQuestions = [
//     {Question: "q1",Answer1: "a1", Answer2: "b2", Answer3: "sony",Truth: "42"},
//     {Question: "",Answer1: "", Answer2: "", Answer3: "",Truth: ""},
//     {Question: "",Answer1: "", Answer2: "", Answer3: "",Truth: ""},
//     {Question: "",Answer1: "", Answer2: "", Answer3: "",Truth: ""},
// ]
const questionMatrix = [
// ["Question", "Answer1", "Answer2", "Answer3", "Answer4", "Index of correct answer(int)"],
    ["Q1", "A1", "B1", "C1", "D1", 2],
    ["Q2", "A2", "B2", "C2", "D2", 4],
    ["Q3", "A3", "B3", "C3", "D3", 3],
]
let qCount = 0;

class questionLogic {
    getQuestion() {
        const title = document.getElementById("1")
        const index = qCount
        qCount++
        return (
            title.innerText = questionMatrix[index][0]
        )
    }

    // getAnswer(index, buttonId) {
    //
    //     const answerId = buttonId.slice(-1)
    //     let bill = document.getElementById(answerId)
    //     let answer = questionMatrix[index][buttonId]
    //     return(
    //         bill.innerText = answer
    //     )
    // }

}

export default new questionLogic