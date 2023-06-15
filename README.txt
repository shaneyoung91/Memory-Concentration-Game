Memory/Concentration Game - Psuedocode

1) Define required constants:
     - pictures (for cards)
       - pre-assign on html <div>???
       - assign to array??

2) Define required variables used to track the state of the game:
     - game board/cards
        - either one-dimensional array or store in DOM?
     - selection (first click, second click)
     - winner
     - countdown timer

3) Functions needed
     - shuffle cards on the board
          - random number generator 
          - 1-D array or div class in the DOM?
     - assign pictures to the cards (if storing on DOM?)
     - handle click event
          - start game and timer on initial click        
          - track click one/two and switch back & forth
          - "flip" cards with click one/two
     - check for a match
          - if match, keep cards "flipped up"
          - if no match, turn cards over
     - countdown timer
          - if board is cleared before timer reaches 0
          - if timer reaches 0, declare loser
     - check winner
          - if board is cleared, declare winner