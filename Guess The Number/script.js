let randomNumber=Math.floor(Math.random() * 101);
let attempt=0;

function startGame() {
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("startButton").style.display = "none";
  document.getElementById("intro").style.display="none";
  
}

function checkGuess() {
  const userGuess = document.getElementById("userGuess").value;
  const result = document.getElementById("resultMessage");

  if (userGuess < 1 || userGuess > 100) {
    result.textContent = "Please enter a number between 1 and 100";
    return;
  }

  if (userGuess < randomNumber) {
    result.textContent = "Too low!";
    attempt+=1;
    
  } else if (userGuess > randomNumber) {
    result.textContent = "Too high!";
    attempt+=1;
  } else {
    result.textContent = `Congratulations! You guessed it! You took ${attempt} attempt to guess it correctly`;
  }
}

function restart() {
  randomNumber = Math.floor(Math.random() * 101);
  document.getElementById("userGuess").value = '';
  document.getElementById("resultMessage").textContent = '';
}
