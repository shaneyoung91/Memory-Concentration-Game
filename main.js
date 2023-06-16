/*----- constants -----*/
// will add more pictures to fully build out the game board
const pictures = ['images/img-1.jpg', 'images/img-2.jpg']


/*----- state variables -----*/
// represents first click / second click
const playerSelection;

const winner;

const countdownTimer;

/*----- cached elements  -----*/
const cards = document.querySelectorAll('.card')


/*----- event listeners -----*/

// Click Event(s)
  //  Start game and time on inital click
  //  Keep track of click one/two and switch back
  //  "Flip" cards with click one/two
  //  Prevent more than 2 cards from being "flipped"
  //  "Play Again" button to stay active and can reset game at any point




/*----- functions -----*/

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