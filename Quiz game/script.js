const quizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "In which year did World War II end?", options: ["1945", "1950", "1952", "1940"], answer: "1945" },
    { question: "What is the largest planet in our solar system?", options: ["Jupiter","Venus","Uranus","Neptune"], answer: "Jupiter" },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "parana"], answer: "Nile" },
    { question: "Which ocean is the largest", options: ["pacific", "Atlantic", "Indian", "Artic"], answer: "pacific" },
];
document.getElementById("start").addEventListener("click", function() {
    document.getElementById("Welcome").style.display = "none";
    document.getElementById("begin").style.display = "none";
  });
  
function startQuiz() {
    document.querySelector(".quiz-container").style.display = "block";
    document.getElementById("start").style.display = "none"; 
    loadQuestion();
}
let currentQuestion = 0, score = 0;

function loadQuestion() {
    let q = quizData[currentQuestion];//current question
    document.getElementById("question").textContent = q.question; //display question

    let optionsContainer = document.getElementById("options");
    document.getElementById("options").innerHTML=""; 

    for (let i = 0; i < q.options.length; i++) {
        let btn = document.createElement("button"); //create btn
        btn.textContent = q.options[i]; //btn text
        btn.onclick = function () { // answer check
            checkAnswer(q.options[i]);
        };
        optionsContainer.append(btn); //add btn
    }

    document.getElementById("score").textContent = `Your score:${score}`;
}

function checkAnswer(answer) {
    if (answer == quizData[currentQuestion].answer) {
        alert("You are right!");
        score++;
    } else {
        alert("Wrong answer!");
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("question").textContent = `Quiz Over! Final Score: ${score}`;
    document.getElementById("options").innerHTML = "";

    let resultMessage="";
     if (score==quizData.length){
        resultMessage="You Won!";
     }
     else{
        resultMessage="Better luck next time!";
     }
    let resultDiv = document.createElement("div");
    resultDiv.textContent = resultMessage;
    document.getElementById("options").append(resultDiv);


    let retryBtn = document.createElement("button");
    retryBtn.textContent = "Retry";
    retryBtn.onclick = restartQuiz;
    document.getElementById("options").append(retryBtn);
}


function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

loadQuestion();
