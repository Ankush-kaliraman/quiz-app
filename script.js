


const questions= [
    {
        question : "Total number of student in CSE B",
        answers: [
            { text: '92', correct : true},
            { text: '90', correct : false},
            { text: '87', correct : false},
            { text: '86', correct : false},
            
        ]
    },
    {
        question: "who is the H.O.D of CSE department in uiet",
        answers: [
            {text: 'sunil dengra', correct: false},
            {text: 'ajay gangra', correct: true},
            {text: 'punnam dabas', correct: false},
            {text: 'karmabir warden', correct: false},
        ]
    },
    {
        question : "Total number of student in CSE B",
        answers: [
            { text: '92', correct : true},
            { text: '90', correct : false},
            { text: '87', correct : false},
            { text: '86', correct : false},
            
        ]
    },
    {
        question: "who is the H.O.D of CSE department in uiet",
        answers: [
            {text: 'sunil dengra', correct: false},
            {text: 'ajay gangra', correct: true},
            {text: 'punnam dabas', correct: false},
            {text: 'karmabir warden', correct: false},
        ]
    },
    {
        question : "Total number of student in CSE B",
        answers: [
            { text: '92', correct : true},
            { text: '90', correct : false},
            { text: '87', correct : false},
            { text: '86', correct : false},
            
        ]
    },
    {
        question: "who is the H.O.D of CSE department in uiet",
        answers: [
            {text: 'sunil dengra', correct: false},
            {text: 'ajay gangra', correct: true},
            {text: 'punnam dabas', correct: false},
            {text: 'karmabir warden', correct: false},
        ]
    },
    
];

const questionelement = document.getElementById("question");
const answerButton = document.getElementById("answer-button")
const nextButton= document.getElementById("next-btn")



let Score=0;
let currentQuestionIndex=0;
 
function startQuiz(){
    Score=0;
    currentQuestionIndex=0;
    nextButton.innerHTML="Next"
    showQuestion()
}
function showQuestion(){
    reset();
let currentQuestion= questions[currentQuestionIndex]
let questionNo= currentQuestionIndex+1;
questionelement.innerHTML=questionNo + "."+currentQuestion.question;

currentQuestion.answers.forEach(answer =>{
    const button= document.createElement("button")
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct

    }
    button.addEventListener("click", selectAnswer)
}); 
}
function reset(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }
}
function selectAnswer(e){
const selectedButton = e.target;
const iscorrect =selectedButton.dataset.correct==="true";
if(iscorrect){
    selectedButton.classList.add("correct");
    Score+=1;

}
else{ selectedButton.classList.add("incorrect");}

Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled= true;
});
nextButton.style.display="block";
}

function showScore(){
    reset()
    questionelement.innerHTML=`you score ${Score} out of ${questions.length}!`
    nextButton.innerHTML="PLAY AGAIN"
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{showScore()

    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{startQuiz()}
})
startQuiz();