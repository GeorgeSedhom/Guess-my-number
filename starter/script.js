'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'a7a number';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 25;
console.log(document.querySelector('.number'));
console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/
let sNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //where is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No number!');
    //when the player win
  } else if (guess === sNumber) {
    //document.querySelector('.message').textContent = 'Correct Number <3';
    displayMessage('Correct Number <3');
    document.querySelector('.number').textContent = sNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== sNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //guess > sNumber ? 'Too High!' : 'Too low';
      displayMessage(guess > sNumber ? 'Too High!' : 'Too low');
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You Lost!';
      displayMessage('You Lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*else if (guess > sNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
    //when the number is too low
  } else if (guess < sNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  sNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Starting guessing';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
