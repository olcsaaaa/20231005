// const questionMatrix = [
//     ["Question", "Answer1", "Answer2", "Answer3", "Answer4", "Index of correct answer(int)"],
//     ["Q1", "A1", "B1", "C1","D1",2],
//     ["Q2", "A2", "B2", "C2","D2",4],
//     ["Q3", "A3", "B3", "C3","D3",3],
// ]
const modelQuestions = [
    {Question: "q1",Answer1: "a1", Answer2: "b2", Answer3: "sany",Truth: "42"},
    {Question: "",Answer1: "", Answer2: "", Answer3: "",Truth: ""},
    {Question: "",Answer1: "", Answer2: "", Answer3: "",Truth: ""},
    {Question: "",Answer1: "", Answer2: "", Answer3: "",Truth: ""},
]

const PrintQuestionModel = function (index) {
 const model = modelQuestions[index]
    const message = "Question:"+model.Question+", A1: "+model.Answer1
    prompt(message)


}
export default PrintQuestionModel