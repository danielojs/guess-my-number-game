'use strict';

// console.log(document.querySelector('.message').textContent);

/*
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 12;
*/

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);
// displaying function
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}
function displayScore(score) {
  document.querySelector('.score').textContent = score;
}
function displayHighscore(highscore) {
  document.querySelector('.highscore').textContent = highscore;
}
function guessValue(value) {
  document.querySelector('.guess').value = value;
}

function bgcStyle(color) {
  document.querySelector('body').style.backgroundColor = color;
}
function widthStyle(width) {
  document.querySelector('.number').style.width = width;
}

// Start guessing..
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When guess has no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number guessed!';
    displayMessage('Guess a number!');

    //When guess is correct / player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 YAY! You right!');
    displayNumber(secretNumber);

    bgcStyle('#60b347');
    widthStyle('30rem');

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('YOU LOSE!');
      displayScore(0);
      displayNumber('🙈🙈🙈');

      bgcStyle('#e03131');
      widthStyle('30rem');
    }
  }
});

// Resetting the game.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  guessValue('');
  bgcStyle('#222');
  widthStyle('15rem');
});
