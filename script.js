const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContinerElement = document.getElementById('question-container')
const questionElement = document.getElementById(question);
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,currectQuestionIndex;
let quizScore =0;


startButton.addEventListener('click, startGame')

nextButton.addEventListener('click') ,() =>{
    currectQuestionIndex++
    setnextQuestion()
}
       
function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(() =>Math.random() -0.5)
    currectQuestionIndex=0;
    questionContinerElement.classList.remove('hide')
    setnextQuestion()
    quizScore=0

}

function setnextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText= question.question;
    question.answers.forEach((answer) =>{
        const button =document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct =answer.correct
        }
        button.addEventListener('click' ,selectAnswer)
        answerButtonsElement.appendChild(button)

    })

}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add ('hide')
    while(answerButtonsElement.firstchild) {

    }
}

function selectAnswer (e) {
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct

    setStatusClass(document.body,correct),
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusclass(button,button.dataset.correct)
    })
    if(shuffledQuestions.lengt > currectQuestionIndex +1){
        nextButton.classList.remove("hide")
    }else {
        startButton.innerText ="restart"
        startButton.classList.remove("hide")
    }if(selectedButton.dataset = correct) {
        quizScore++
    }
    document.getElementById('right-answers').innerText=quizScore
}

function setStatusclass(element,correct){
    clearStatusClass(element)
    if(correct) {
        element.classList("correct")
    }else {
        element.classList.add("wrong")
    }
}



function clearStatusClass(element){
    element.classlist.remove('correct')
    element.classlist.remove('wrong')
}
const questions =[
    {
        question: 'vad heter jag',
        answers : [
            { text: 'Peter', correct: true},
            { text: 'Peter', correct: false},
            { text: 'Peter', correct: false},
            { text: 'Peter', correct: false},
        ],
    },
    {
        question: 'vad heter jag i efternamn?',
        answers : [
            { text: 'Bengt', correct: false},
            { text: 'Anders', correct: false},
            { text: 'Larsson', correct: true},
            { text: 'Erik', correct: false},
        ],
    },
    {
        question: 'vad heter jag i efternamn?',
        answers : [
            { text: 'Bengt', correct: false},
            { text: 'Anders', correct: false},
            { text: 'Larsson', correct: true},
            { text: 'Erik', correct: false},
        ],
    },
    {
        question: 'vad heter jag i efternamn?',
        answers : [
            { text: 'Svensson', correct: false},
            { text: 'Sune', correct: false},
            { text: 'Keff', correct: false},
            { text: 'Kjaer', correct: true},
        ],
    },
]
