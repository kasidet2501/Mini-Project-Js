const quiz = document.getElementById("quiz");
const btnContinue = document.getElementById("btnContinue");
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const button = document.getElementById("continue");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");

const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let currentQues = 0;
let scoreCorrect = 0;
let scoreWrong = 0;
nextQuiz();


function nextQuiz(){
    const currentQuiz = quizData[currentQues];

    questionEl.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;

    setRadioValue();
}

function setRadioValue() {
    const currentQuiz = quizData[currentQues];

    document.getElementById("a").setAttribute("value", currentQuiz.a);
    document.getElementById("b").setAttribute("value", currentQuiz.b);
    document.getElementById("c").setAttribute("value", currentQuiz.c);
    document.getElementById("d").setAttribute("value", currentQuiz.d);

  }

button.addEventListener('click',() => {
    console.log(quizData.length);
    if(currentQues != quizData.length-1){
        nextQuiz();
    }
    else{
        checkAnswer();
        quiz.innerHTML = `
                <br><br><br><br><br><br><br>
                <center><h2>You answered correctly at ${scoreCorrect}/${quizData.length} <i class="fa-solid fa-fire-flame-curved fa-bounce fa-xl" style="color: #ff0000;"></i> .</h2>
                <br><button onclick="location.reload()">Reload</button></center>
            `;
        btnContinue.innerHTML = '';
    }

    checkAnswer();
    currentQues++;
});

function checkAnswer(){
    const selected = document.querySelector('input[name="answer"]:checked');
    const currentQuiz = quizData[currentQues];
    const Ans = currentQuiz.correct;
    console.log("selected:",selected.id," Answer:",Ans);

    if(selected.id == Ans){
        scoreCorrect++;
        correct.innerHTML = scoreCorrect;
    }
    else{
        scoreWrong++;
        wrong.innerHTML = scoreWrong;
    }

}


