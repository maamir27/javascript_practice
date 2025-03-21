'use strict'

let answer = Math.trunc(Math.random()*20)+1;
console.log(answer);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1 ){
    if (guess === answer ){
      document.querySelector('.message').textContent = '🎉 Correct answer'
      document.querySelector('.number').textContent = guess;
      document.body.style.background = "#60b347"
      document.querySelector('.number').style.width = '30rem';


      if (score > highscore) {
        highscore = score
        document.querySelector('.highscore').textContent = score
      }
    } else if (guess < answer) {{
      document.querySelector('.message').textContent = '📈 Aim higher'
      score--
      document.querySelector('.score').textContent = score;
    }} else if (guess > answer){
      document.querySelector('.message').textContent = '📉 Aim lower'
      score--
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '🎉 You lose!'
    document.querySelector('.score').textContent = 0;

}})

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  answer = Math.trunc(Math.random()*20)+1;
  console.log(answer);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...'
  document.body.style.background = "#222"
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
})
