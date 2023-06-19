/*----- constants -----*/
const pictures = ['images/img-1.jpeg', 'images/img-2.jpeg', 'images/img-3.jpg', 'images/img-4.jpg', 'images/img-5.jpg', 'images/img-6.jpg',
'images/img-1.jpeg', 'images/img-2.jpeg', 'images/img-3.jpg', 'images/img-4.jpg', 'images/img-5.jpg', 'images/img-6.jpg']

/*----- state variables -----*/
let winner; // check for winner
let countdownTimer; // declares amount of time
let startTime; // start timer
let selectedCards; // array to store selected cards

/*----- cached elements  -----*/
const cards = document.querySelectorAll('.card')
const frontCardEl = document.getElementsByClassName('front-card');
const imageEl = document.getElementsByTagName('img');
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const objective = document.getElementById('objective');
const playAgainBtn = document.getElementById('playagain-btn');

/*----- event listeners -----*/
cards.forEach(card => card.addEventListener('click', handleClick));

/*----- functions -----*/
init();

// Initialize all state variables, then call render()
function init() {
  selectedCards = [];
  winner = true;
  // Set time to 2 minutes (120 seconds)
  countdownTimer = 25;
  render();
}

function render() {
  renderShuffle(pictures);
  renderAssignPics();
  checkforMatch();
  checkforWin();
  countdown();
  }

function renderShuffle(array) {
  // Fisher Yates shuffle algorithim
  // Randomizes order of pictures array
  for (let origId = array.length - 1; origId > 0; origId--) {
    const newId = Math.floor(Math.random() * (origId + 1));
    [array[origId], array[newId]] = [array[newId], array[origId]];
  }
  return array;
}

function renderAssignPics() {
  // create <img> elements for front card <div>
  for (let i = 0; i < frontCardEl.length; i++) {
    const frontCardImg = frontCardEl[i];
    const newImg = document.createElement('img');
    newImg.src = pictures[i];
    newImg.style.height = "19.8vmin";
    newImg.style.width = "17.8vmin";
    frontCardImg.appendChild(newImg)
  }
}

function handleClick(evt){
  // Guard rail (do nothing if cards already selected (clickOne/clickTwo), or cards are a match)
  if (evt.target.classList.contains('selection') || evt.target.classList.contains('match')) {
    return;
  }
  evt.target.classList.add('selection');
  evt.target.classList.add('flipUp');
  selectedCards = document.querySelectorAll('.selection');
  if (selectedCards.length === 2) {
    // Disable card clicks temporarily to prevent multiple selections
    cards.forEach((card) => card.removeEventListener('click', handleClick));
    checkforMatch();
  }
}

function checkforMatch() {
  // If match, remove selection class and add match class
  if (selectedCards[0].src === selectedCards[1].src) {
    selectedCards.forEach((card) => {
      card.classList.remove('selection');
      card.classList.add('match');
    })
  } else {  // Remove cards from selectedCards array
    selectedCards.forEach((card) => card.classList.remove('selection', 'flipUp'));
  }
  // Re-enable card clicks and keep playing
  cards.forEach((card) => card.addEventListener('click', handleClick));
  selectedCards = [];
}

function countdown() {
  // If timer reaches 0, 
    // Declare loser (see checkForWin function)
  // Start button disabled after game begins
  // WORK TO DO - CONVERT TIME TO MINUTES AND SECONDS
  startTime = setInterval(function() {
    countdownTimer--;
    timer.innerHTML = `Timer: ${countdownTimer}`;
    startBtn.disabled = true;
    checkForWin();
  }, 1000);
};


function stopTimer() {
  // Separate function to stop timer at 0.
  clearInterval(startTime);
}

function checkForWin() {
    // If all <img> elements DO NOT contain class 'match',
      // set winner to 'false', else set to 'true' and return message
    // Declare winner, loser, or keep playing
      // Remove click listener from cards when winner or loser is declared
  for (let i = 0; i < imageEl.length; i++) {
    const image = imageEl[i];
    if (countdownTimer === 0) {
      stopTimer();
      cards.forEach((card) => card.removeEventListener('click', handleClick));
      return objective.innerHTML = `<h3 style="color:red">Time's up! You Lose! Play Again?</h3>`;
    }
    if (!image.classList.contains('match')) {
      winner = false;
      return objective.innerHTML = "";
  } else {
      winner = true;
  }
}
  if (winner = true) {
    stopTimer();
    cards.forEach((card) => card.removeEventListener('click', handleClick));
    return objective.innerHTML = `<h3 style="color:#0B81F0">CONGRATS! YOU WIN!</h3>`;
  }
 }

 function playAgain () {
  // Restarts the game
  window.location.reload()
 }