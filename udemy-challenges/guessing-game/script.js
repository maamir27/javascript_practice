const answer = Math.trunc(Math.random() * 20) + 1
console.log(answer)

let score = 20;

document.querySelector(".check").addEventListener('click', function(){
  const guess = Number(document.querySelector(".guess").value);

  if (guess === answer) {
    document.querySelector("body").style.backgroundColor = '#60b347';
    document.querySelector(".message").textContent = "Correct number";
    document.querySelector(".number").style.width = '30rem';
    document.querySelector(".number").textContent = answer
  } else if (guess > answer) {
    if (score > 0){
      document.querySelector(".message").textContent = "📈 Too high! Go low";
      score--;
      document.querySelector(".score").textContent = score;
    }else{
      document.querySelector(".message").textContent = "You lost the game.. :( ";
    }
  } else if (guess < answer) {
    if (score > 0) {
      document.querySelector(".message").textContent = "📉 Too low! Go high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game.. :( ";
    }
  } else if (!guess) {
    document.querySelector(".message").textContent = "Enter a number between 1 and 20";
  }
})

document.querySelector(".again").addEventListener('click', function(){
  let score = 20;
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".number").style.width = '15rem';
  document.querySelector("body").style.backgroundColor = '#222';
})
