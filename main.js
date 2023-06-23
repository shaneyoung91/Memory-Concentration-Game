/*----- constants -----*/
const pictures = ['images/img-1.jpeg', 'images/img-2.jpeg', 'images/img-3.jpg', 'images/img-4.jpg', 'images/img-5.jpg', 'images/img-6.jpg',
'images/img-1.jpeg', 'images/img-2.jpeg', 'images/img-3.jpg', 'images/img-4.jpg', 'images/img-5.jpg', 'images/img-6.jpg'];
let startTime; // start timer

/*----- state variables -----*/
let winner; // check for winner
let countdownTimer; // declares amount of time
let selectedCards; // array to store selected cards

/*----- cached elements  -----*/
const cards = document.querySelectorAll('.card');
const backCardEl = document.getElementsByClassName('back-card');
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const playAgainBtn = document.getElementById('playagain-btn');
const lightboxMessage = document.getElementById('lb-message');
const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('close-btn');

/*----- event listeners -----*/
cards.forEach(card => card.addEventListener('click', handleClick));
closeBtn.addEventListener('click', hideLightbox);

/*----- functions -----*/
init();

function init() {
  selectedCards = [];
  winner = true;
  isCardClickable = true;
  countdownTimer = 90; // Set time to 'x' seconds 
  render();
};

function render() {
  renderShuffle(pictures);
  renderAssignPics();
  cards.forEach((card) => card.removeEventListener('click', handleClick));
  };

function renderShuffle(array) {  // Fisher Yates shuffle algorithim - Randomizes order of pictures array
  for (let origId = array.length - 1; origId > 0; origId--) {
    const newId = Math.floor(Math.random() * (origId + 1));
    [array[origId], array[newId]] = [array[newId], array[origId]];
  }
  return array;
};

function renderAssignPics() { // Assign img to each card, using pictures array
  for (let i = 0; i < cards.length; i++) {
    const cardsImg = cards[i];
    const newImg = document.createElement('img');
    newImg.src = pictures[i];
    newImg.style.height = "19.70vmin";
    newImg.style.width = "18.30vmin";
    cardsImg.appendChild(newImg)
  }
};

function handleClick(evt){
  if (evt.target.classList.contains('selected') || evt.target.classList.contains('match')) {  // Guard rail
    return;
  }
  evt.target.classList.add('selected', 'flipUp');
  evt.target.style.opacity = "0";
  evt.target.style.transition = "visibility 1s, opacity 1s linear";
  selectedCards.push(evt.target);
  if (selectedCards.length === 2) { // Disable card clicks to prevent more than 2 cards from being selected
    cards.forEach((card) => card.removeEventListener('click', handleClick));
    setTimeout(() => {
      checkForMatch();
    }, 1000);
  }
};

function checkForMatch() {   // If match, remove selected class and add match class
    if (selectedCards[0].nextElementSibling.src === selectedCards[1].nextElementSibling.src) {
      selectedCards.forEach((card) => {
        card.classList.remove('selected');
        card.classList.add('match');
        card.nextElementSibling.style.pointerEvents = "none"; // Guard rail
        card.parentElement.style.pointerEvents = "none"; // Guard rail 
      })
    } else {  // If no match, remove class from cards in array
        selectedCards.forEach((card) => {
          card.classList.remove('selected', 'flipUp');
          card.style.opacity = "1";
          card.style.transition = "visibility 1s, opacity 1s linear";;
      });
    }
  // Re-enable card clicks and reset array to empty
  cards.forEach((card) => card.addEventListener('click', handleClick));
  selectedCards = [];
}

function countdown() { // Begin countdown after Start button is clicked. Disable Start button after game begins.
  startTime = setInterval(function() {
    let minutes = Math.floor(countdownTimer / 60);
    let seconds = (countdownTimer % 60);
    countdownTimer--;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    timer.innerHTML = `TIME: ${minutes}:${seconds}`;
    startBtn.disabled = true;
    checkForWin();
  }, 1000);
  cards.forEach((card) => card.addEventListener('click', handleClick));
};

function stopTimer() {
  clearInterval(startTime);
};

function showLightbox() {
  lightbox.style.display = 'block';
};

 function hideLightbox() {
  lightbox.style.display = 'none';
};

function checkForWin() { // If all back-card elements DO NOT contain class 'match', set winner to 'false', else set to 'true' and return message
  for (let i = 0; i < backCardEl.length; i++) {
    const backCard = backCardEl[i];
    if (countdownTimer === -1) {
      stopTimer();
      cards.forEach((card) => card.removeEventListener('click', handleClick));
      showLightbox();
      return lightboxMessage.innerHTML = `<h1 style="color:#FF6347">TIME IS UP!<br>YOU LOSE!</h1>`;
    }
    if (!backCard.classList.contains('match')) {
      winner = false;
      break;
  } else {
    winner = true;
  }
};
  if (winner === true) { // Remove click from cards when winner or loser is declared
    stopTimer();
    cards.forEach((card) => card.removeEventListener('click', handleClick));
    showLightbox();
    return lightboxMessage.innerHTML = `<h1 style="color:#0B81F0">CONGRATS!<br>YOU WIN!</h1>`;
  }
 };

 function playAgain () { // Restarts the game
  window.location.reload();
 };