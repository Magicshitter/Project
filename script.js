let ballX1, ballY1, ballSize1, ballColor1;
let ballX2, ballY2, ballSize2, ballColor2;
let ballX3, ballY3, ballSize3, ballColor3;
let ballX4, ballY4, ballSize4, ballColor4;
let ballX5, ballY5, ballSize5, ballColor5;
let score;
let customFont;

function preload() {
  customFont = loadFont('2.ttf'); 
}

// spawning ball
function setup() {
  createCanvas(200, 200);
  ballSize1 = ballSize2 = ballSize3 = ballSize4 = ballSize5 = 30;
  score = 0;
  spawnBall1();
  spawnBall2();
  spawnBall3();
  spawnBall4();
  spawnBall5();
}

// drawing the actual balls
function draw() {
  background(220);
  drawBall(ballX1, ballY1, ballSize1, ballColor1);
  drawBall(ballX2, ballY2, ballSize2, ballColor2);
  drawBall(ballX3, ballY3, ballSize3, ballColor3);
  drawBall(ballX4, ballY4, ballSize4, ballColor4);
  drawBall(ballX5, ballY5, ballSize5, ballColor5);
  displayScore();
}

function drawBall(x, y, size, color) {
  fill(color);
  ellipse(x, y, size, size);
}

// displaying the score and if function for goodjob
function displayScore() {
  fill(0);
  textFont(customFont); 
  textSize(20);
  text(`Score: ${score}`, 50, 30);
  if (score === 20) {
    textSize(20);
    text('Good Job!', 50, 100); 
  }
  if (score === 40) {
    textSize(20);
    text('Good Job!', 50, 100); 
  }
  if (score === 60) {
    textSize(20);
    text('Good Job!', 50, 100); 
  }
  if (score === 80) {
    textSize(20);
    text('Good Job!', 50, 100); 
  }
  if (score === 100) {
    textSize(10);
    text('You beat the game! now get off', 50, 100); 
  }
}

// ball spawning
function spawnBall1() {
  ballX1 = random(ballSize1, width - ballSize1);
  ballY1 = random(ballSize1, height - ballSize1);
  ballColor1 = color(random(255), random(255), random(255));
}
function spawnBall2() {
  ballX2 = random(ballSize2, width - ballSize2);
  ballY2 = random(ballSize2, height - ballSize2);
  ballColor2 = color(random(255), random(255), random(255));
}

function spawnBall3() {
  ballX3 = random(ballSize3, width - ballSize3);
  ballY3 = random(ballSize3, height - ballSize3);
  ballColor3 = color(random(255), random(255), random(255));
}

function spawnBall4() {
  ballX4 = random(ballSize4, width - ballSize4);
  ballY4 = random(ballSize4, height - ballSize4);
  ballColor4 = color(random(255), random(255), random(255));
}

function spawnBall5() {
  ballX5 = random(ballSize5, width - ballSize5);
  ballY5 = random(ballSize5, height - ballSize5);
  ballColor5 = color(random(255), random(255), random(255));
}

// change color
function keyPressed() {
  changeBallColors();
}
// the actual changing
function changeBallColors() {
  ballColor1 = color(random(255), random(255), random(255));
  ballColor2 = color(random(255), random(255), random(255));
  ballColor3 = color(random(255), random(255), random(255));
  ballColor4 = color(random(255), random(255), random(255));
  ballColor5 = color(random(255), random(255), random(255));
}

// mouse pressing function
function mousePressed() {
  checkBallClick(ballX1, ballY1, ballSize1, spawnBall1);
  checkBallClick(ballX2, ballY2, ballSize2, spawnBall2);
  checkBallClick(ballX3, ballY3, ballSize3, spawnBall3);
  checkBallClick(ballX4, ballY4, ballSize4, spawnBall4);
  checkBallClick(ballX5, ballY5, ballSize5, spawnBall5);
}

// score function
function checkBallClick(x, y, size, spawnFunction) {
  let d = dist(mouseX, mouseY, x, y);
  if (d < size / 2) {
    score++;
    spawnFunction();
  }
}
