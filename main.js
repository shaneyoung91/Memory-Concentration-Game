/*----- constants -----*/
// will add more pictures to fully build out the game board
const pictures = ['images/img-1.jpg', 'images/img-2.jpg', 'images/img-3.jpg', 'images/img-4.jpg', 'images/img-5.jpg', 'images/img-6.jpeg', 
'images/img-1.jpg', 'images/img-2.jpg', 'images/img-3.jpg', 'images/img-4.jpg', 'images/img-5.jpg', 'images/img-6.jpeg']


/*----- state variables -----*/
// represents first click / second click
let playerClick;
// check for winner if all cards face up and timer not 0:00
let winner;
// check for card match
let match;
// start timer, and declare loser if timer reaches 0:00
let countdownTimer;
// 
let selectedCards;



/*----- cached elements  -----*/
const cards = document.querySelectorAll('.card')
const frontCardEl = document.getElementsByClassName('front-card');


/*----- event listeners -----*/
cards.forEach(card => card.addEventListener('click', handleClick));

// Click Event(s)
  //  Start game and time on inital click
  //  Keep track of click one/two and switch back
  //  "Flip" cards with click one/two
  //  Prevent more than 2 cards from being "flipped"
  //  "Play Again" button to stay active and can reset game at any point

/*----- functions -----*/
init();

// Initialize all state variables, then call render()
function init() {
  playerClick = {
    clickOne: null,
    clickTwo: null
  }
  selectedCards = [];
  winner = checkForWin();
  countdownTimer = countdown();
  render();
}

function render() {
  renderShuffle(pictures);
  renderAssignPics();
  checkforMatch();
  checkforWin();
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
    newImg.style.height = "20vmin";
    newImg.style.width = "18vmin";
    frontCardImg.appendChild(newImg)
  }
}

function handleClick(evt){
  // Guard rail (do nothing if cards already selected (clickOne/clickTwo), or cards are a match)
  if (evt.target.classList.contains('selection') || evt.target.classList.contains('match')) {
    return;
  }
  evt.target.classList.add('selection', 'flipUp');
  selectedCards = document.querySelectorAll('.selection');
  if (selectedCards.length === 2) {
    // Disable card clicks temporarily to prevent multiple selections
    cards.forEach((card) => card.removeEventListener('click', handleClick));
  checkforMatch();
}}

function checkforMatch() {
  // If match, remove selection class and add match class
  if (selectedCards[0].src === selectedCards[1].src) {
    selectedCards.forEach((card) => {
      card.classList.remove('selection');
      card.classList.add('match');
    })
  } else {  // Remove cards from selectedCards array
            // Keep playing
    selectedCards.forEach((card) => card.classList.remove('selection', 'flipUp'));
  }
  cards.forEach((card) => card.addEventListener('click', handleClick));
}

function checkForWin() {

}

function countdown() {

};





// (2) Assign pictures to the cards
  // Create <img> elements for each card (via DOM), post-shuffle position (or maybe asynchronous?)

// (3) Check for Match
  // If match, keep cards "face up"  => continue play
  // If no match, turn cards "face down" => continue play

// (4) Countdown timer
  // If all cards are not face up before timer reaches 0, 
    // (1) declare loser
    // (2) end game  -> disable clicks on cards, only activate play again button

// (5) Check for Winner
  // If all cards are "face up", declare winner