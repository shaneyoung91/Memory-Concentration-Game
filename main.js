/*----- constants -----*/
// will add more pictures to fully build out the game board
const pictures = ['images/img-1.jpg', 'images/img-2.jpg', 'images/img-1.jpg', 'images/img-2.jpg']


/*----- state variables -----*/
// represents first click / second click
let playerSelection;
// check for winner if all cards face up and timer not 0:00
let winner;
// check for card match
let match;
// start timer, and declare loser if timer reaches 0:00
let countdownTimer;

/*----- cached elements  -----*/
const cards = document.querySelectorAll('.card')
const frontCardEl = document.getElementsByClassName('front-card');


/*----- event listeners -----*/
// document.getElementsByClassName('card').addEventListner('click', handleClick);
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
  playerSelection = {
    clickOne: 1,
    clickTwo: 2
  }
  match = checkforMatch();
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
  for (let origId = array.length - 1; origId > 0; origId--) {
    const newId = Math.floor(Math.random() * (origId + 1));
    [array[origId], array[newId]] = [array[newId], array[origId]];
  }
  return array;
}

function renderAssignPics() {
  // create <img> elements for front card <div>
  for (let i = 0; i < frontCardEl.length; i++) {
    const addImg = frontCardEl[i];
    const newImg = document.createElement('img');
    newImg.src = pictures[i];
    newImg.style.height = "100px";
    newImg.style.width = "100px";
    addImg.appendChild(newImg)
  // set <img> height and width using style
  }
}

function checkforMatch() {

}

function checkForWin() {

}

function countdown() {

};

function handleClick(evt){
  render();
}

// (1) Shuffle Cards
  // Fisher Yates shuffle algorithim
     // Takes a list a list of all elements of the sequence, and continually determines the next element
     // in the shuffled sequence by randomly drawing an element from the list until no elements remain 
     // (definition source: Wikipedia)

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