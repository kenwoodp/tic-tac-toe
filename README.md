# Tic Tac Toe

Tic Tac Toe is a game traditionally played on a 3 x 3 grid where players take turns placing an 'X' or an 'O'. The first player to place 3 of their respective symbol in a row on the grid wins the game, and the board is cleared by pressing reset, or selecting the option to play again. Once the users have finished the desired amount of rounds, they are able to press the "No" button at the end of the round, this will disable the game board and display the final score between the two players and declare a winner. The user can then select the reset button on the top right of the game board to reset the game with the scores at 0-0.

You can play my game here: https://kenwoodp.github.io/tic-tac-toe/soccer.html

## Approach to the problem

To begin with, I used 9 empty div tags with a parent section tag in HTML, I then used CSS to give the grid a basic style which sorted it into 3 x 3.

I then used a pseudocode which outlined the game logic of tic tac toe, and a general summary of the checks that need to be made every time a box is clicked, I was able to create DOM objects for each square and check 'if' conditions to see if a winning condition had been met for either player. Based on if the winning condition had been met, a result is displayed by manipulating the inner text of an element in HTML and buttons are added to the HTML which allow the player to play again if they wish to.

## Cool tech used

I used inline-styling to switch between the first frame of a .gif file and the entire moving .gif file each time a player makes a choice on the board, this was to simulate a player kicking their respective symbol onto the grid. I did this by setting each DOM objects display style to "none" and then back to default at the beginning and end of each turn.

I also used opacity in all elements with a background color to make the HTML background image stand out more, I also used this in order to decrease the opacity of each button when it is hovered over to create a more interactive .

## Lessons I learnt

I learnt that I need to start declaring more functions while I'm writing out repeating code blocks to improve readability, simplify my script and to also minimise syntax errors. I also learnt that you can compose animation using CSS and HTML, even if it is something as simple as decreasing background opacity of a button when it is hovered over and how this contribute to the UX.

## Future features

As far as future features are concerned, I would love to be able to implement a start and character select screen, which would allow you to select famous soccer players and use them in game. I would also like to be able to have used images instead of Xs and Os, perhaps an image of the back of each player's jersey + number.

I would also like to change the script to use arrays instead of 'if' statements since it would be easier to scale the grid up to more columns x more rows. I would also like to make the design more responsive and work over a smaller resolution.

Other game features would be nice also, such as implementing a timer, selecting the player's name (which would customise the image) or perhaps even programming an AI for a user to play solo against.
