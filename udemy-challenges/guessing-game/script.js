let answer = Math.trunc(Math.random() * 20) + 1

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector(".message").textContent = message;
}

const displayScore = function(score){
  document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener('click', function(){
  const guess = Number(document.querySelector(".guess").value);

  if (guess === answer) {
    document.querySelector("body").style.backgroundColor = '#60b347';
    displayMessage("Correct number");
    document.querySelector(".number").style.width = '30rem';
    document.querySelector(".number").textContent = answer

    if(score > highscore){
      highscore = score;
      document.querySelector(".highscore").textContent = highscore
    }
  } else if (guess !== answer) {
    if (score > 0){
      displayMessage(guess > answer ? "📈 Too high!" : "📉 Too low!");
      score--;
      displayScore(score);
    }else{
      displayMessage("You lost the game.. :( ");
    }
  }  else if (!guess) {
    displayMessage("Enter a number between 1 and 20");
  }
})

document.querySelector(".again").addEventListener('click', function(){
  score = 20;
  displayScore(score);

  answer = Math.trunc(Math.random() * 20) + 1

  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = '15rem';
  document.querySelector("body").style.backgroundColor = '#222';
  document.querySelector(".number").textContent = '?';
  document.querySelector(".guess").value = "";
})
