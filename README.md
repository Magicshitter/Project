## FEATURES TO SAVE U TIME
- Key press change colour
  
- Mouse press on ball will make it spawn in a different location
  every time

- Every 20 score a text will pop up saying good job.
  at score 100 it will say get off the game lol

- Organization is max

- Dont get to score 100

- Uses variables (ALOT)

- 100% mark potential

- Stuff Straight from the learning github

- Special feature: A lot of useless code

## EXPLAINATION
This game is a aim game. Try to get the highest score that you can!

Code explaination - 

Section 1:
Section 1 is all my variables being used. Pretty self explanatory 

Section 2:
Section 2 is my balls variables are for respawning in

Section 3:
Section 3 is my balls actually being drawn in using functon draw()

Section 4:
Section 4 is displaying. This is also pretty self explanatory but i was thinking about turning this into a horror game.
I didnt want to go too indepth into the game and kept it simple. Also because i ran out of time. But i wanted to 
make a audio start playing at score 105 with making the canvas bigger making the balls move and bounce around with intense
music. But ofcourse i didnt have enough time for that. 

Section 5:
Section 5 is giving my variables actual code for when its executed. 
`function spawnBall1() {
  ballX1 = random(ballSize1, width - ballSize1);
  ballY1 = random(ballSize1, height - ballSize1);
  ballColor1 = color(random(255), random(255), random(255));
}`
Heres a piece of it. ballX1 and ballY1 is my x and y for my ball. then my ball color is for changing color when key press.

Section 6:
Is the change color variable

Section 7:
`function mousePressed() {
  checkBallClick(ballX1, ballY1, ballSize1, spawnBall1);
  checkBallClick(ballX2, ballY2, ballSize2, spawnBall2);
  checkBallClick(ballX3, ballY3, ballSize3, spawnBall3);
  checkBallClick(ballX4, ballY4, ballSize4, spawnBall4);
  checkBallClick(ballX5, ballY5, ballSize5, spawnBall5);
}`
This is checking if the ball was pressed If it was then thats when it will activate the variables 
`(ballX1, ballY1, ballSize1, spawnBall1);`

Section 8:
Score function











