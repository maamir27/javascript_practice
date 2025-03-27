'use strict';

// NEW GAME
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scoreDisplay0 = document.getElementById('score--0');
const scoreDisplay1 = document.getElementById('score--1');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');

scoreDisplay0.textContent = 0
scoreDisplay1.textContent = 0

let die = document.querySelector('.dice')
die.classList.add('hidden')

let currentScore = 0

// assigning an active player
let activePlayer = 0;

// ROLL EVENT
const btnRoll = document.querySelector('.btn--roll');

btnRoll.addEventListener('click',function(){

  let dieRoll = Math.trunc(Math.random()*6) +1;
  // console.log(dieRoll);
  die.classList.remove('hidden');
  die.src = `dice-${dieRoll}.png`

  // while # is not 1
  if (dieRoll !== 1){
    currentScore += dieRoll
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
  } else {
    switchPlayer()
  }
})

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('.player--active');
  player1.classList.toggle('.player--active');
}

// HOLD EVENT
const btnHold = document.querySelector('.btn--hold');

btnHold.addEventListener('click', function(){
  
})


// RESET EVENT
const btnReset = document.querySelector('.btn--new')
