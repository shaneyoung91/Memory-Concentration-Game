# Memory/Concentration Game

## Wireframe

![first draft UI](Matching-Game-Wireframe.png)


## Psuedocode

1. Define required constants:
     - Pictures (for cards)
       - store pictures in array

2. Define required variables used to track the state of the game:
     - Cards
       - use `<div>` and access via DOM
     - Selection (first click, second click)
     - Winner
     - Countdown timer
     
3. Functions needed
     - Shuffle cards
          -  Fisher-Yates shuffle algorithm
          -  The algorithm takes a list of all the elements of the sequence, and continually determines the next element in the shuffled sequence by randomly drawing an element from the list until no elements remain. (Wikipedia)
     - Assign pictures to the cards
          -  create `<img>` elements for each card (via DOM), post-shuffle position
     - Handle click events
          - start game and timer on initial click        
          - track click one/two and switch back & forth
          - "flip" cards with click one/two
     - Check for a match
          - if match, keep cards "flipped up", keep playing
          - if no match, turn cards over, keep playing
     - Countdown timer
          - if all cards are not face up before timer reaches 0, declare loser
     - Check winner
          - if all cards are face up, declare winner
