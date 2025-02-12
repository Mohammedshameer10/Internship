const quizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" }
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
    let q = quizData[currentQuestion];
    document.getElementById("question").textContent = q.question;

    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; 

    for (let i = 0; i < q.options.length; i++) {
        let btn = document.createElement("button"); 
        btn.textContent = q.options[i]; 
        btn.onclick = function () {
            checkAnswer(q.options[i]);
        };
        optionsContainer.appendChild(btn); 
    }

    document.getElementById("score").textContent = `Score: ${score}`;
}

function checkAnswer(answer) {
    if (answer === quizData[currentQuestion].answer) {
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

    let retryBtn = document.createElement("button");
    retryBtn.textContent = "Retry";
    retryBtn.onclick = restartQuiz;
    document.getElementById("options").appendChild(retryBtn);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

loadQuestion();
