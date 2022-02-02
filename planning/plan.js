// PSEUDOCODE

// ============================================================================

// ROUGH FORMATTING STEPS

// 1. Create a parent section element and 9 child div tags in HTML

// 2. Class each div tag as boxes 1-9

// 3. Create a border for each box

// 4. Set display to grid for the section

// 5. Remove borders for all boxes depending on position on grid

// 3. Add a function like makeBoxRed from warmup 1/2/22

// 4. Add a variable to grab the section

// 5. Add an event listener which runs an event listener for all boxes

// 6. Add an event.target which selects each individual box and sets it to 'X'

// 7. Add an event.target which selects an individual box and sets it to 'O'

// 8. Make each 'X' and 'O' have it's own <span> tag, with a separate class for either 'X' or 'O'

// 9. Check 3 conditions
//  A - Check for win, lose or draw after every click
//  B - If these conditions are not met, we will not change the sign

// ============================================================================

// WINNING CONDITION

// Winning condition is going to be an array of numbers

// var winningCondition = [numbers which are the index of the 3x3 board]

// ============================================================================

// GAME LOGIC

// Player 1 clicks a box

// Check if the box has been clicked before:
//  -If yes: do not allow box to be clicked again
//  -If no: then mark with X

// Check if there is a winning condition:
//  -If yes:
//      -Is it a win, lose or a draw?

// Show a message based on the winning condition

// Give an option to restart

// If no winning condition, then change the player and mark the next box with 'O'