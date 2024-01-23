let ballX = [], ballY = [], ballSize = [], ballColor = [], ballSpeedX = [], ballSpeedY = [];
let score;
let customFont;
let gameState = 'menu'; // Possible states: 'menu', 'game', 'github'
let mySound;


function preload() {
  customFont = loadFont('2.ttf');
  soundFormats('mp3', 'ogg');
  mySound = loadSound('1.mp3');
}

function setup() {
  createCanvas(200, 200);
  for (let i = 0; i < 5; i++) {
    ballSize[i] = 30;
    spawnBall(i);
    ballSpeedX[i] = random(1, 3) * (random() > 0.5 ? 1 : -1);
    ballSpeedY[i] = random(1, 3) * (random() > 0.5 ? 1 : -1);
  }
  score = 0;
}

function draw() {
  if (gameState === 'menu') {
    drawMenu();
  } else if (gameState === 'game') {
    drawGame();
  } else if (gameState === 'github') {
    drawGithubPage();
  }
  if (gameState === 'game' && score >= 105 && !mySound.isPlaying()) {
    mySound.loop();
  }
}

function drawMenu() {
  background(220);
  fill(0);
  textSize(15);
  text("Option 1: Start Game", 30, 70);
  text("Option 2: GitHub", 40, 100);
}

function drawGame() {
  if (score >= 105) {
    if (width < 700) {
      resizeCanvas(700, 700);
      for (let i = 5; i < 15; i++) {
        ballSize[i] = 30;
        spawnBall(i);
        ballSpeedX[i] = random(1, 3) * (random() > 0.5 ? 1 : -1);
        ballSpeedY[i] = random(1, 3) * (random() > 0.5 ? 1 : -1);
      }
    }
    background(255, 0, 0);
    textSize(20);
    text("U have entered Extreme level", 200, 350);
    text("Click on the balls to damage him!", 180, 320);
    moveAndBounceBalls();
    drawBoss();
    bossDialog();
  } else {
    background(220);
    for (let i = 0; i < 5; i++) {
      drawBall(ballX[i], ballY[i], ballSize[i], ballColor[i]);
    }
  }
  displayScore();
}

function drawGithubPage() {
  background(220);
  fill(0);
  textSize(10);
  text("GitHub.com/magicshitter", 50, 100);
}

function keyPressed() {
  if (gameState === 'menu') {
    if (key === '1') {
      gameState = 'game';
    } else if (key === '2') {
      gameState = 'github';
    }
  } else if (gameState === 'github') {
    gameState = 'menu';
  } else {
    changeBallColors();
  }
}

function mousePressed() {
  if (gameState === 'game') {
    for (let i = 0; i < ballSize.length; i++) {
      checkBallClick(ballX[i], ballY[i], ballSize[i], () => spawnBall(i));
    }
  }
}

function drawBall(x, y, size, color) {
  fill(color);
  ellipse(x, y, size, size);
}

function displayScore() {
  fill(0);
  textFont(customFont);
  textSize(20);
  text(`Score: ${score}`, 50, 30);

  if (score === 20 || score === 40 || score === 60 || score === 80) {
    textSize(20);
    text('Good Job!', 50, 100); 
  } else if (score === 100) {
    textSize(10);
    text('You beat the game! Now get off', 10, 100); 
    text('the game. You scored 100. Do', 10, 110); 
    text('you have a life?', 50, 120); 
  } else if (score === 102) {
    textSize(10);
    text('No way you’re still going!', 20, 100); 
  } else if (score === 103) {
    textSize(10);
    text('Alright, resetting you...', 10, 100); 
  } else if (score === 104) {
    textSize(10);
    text('The code isn’t complete, but 5', 10, 100); 
    text('more balls are supposed', 20, 110);
    text('to spawn', 70, 120);  
  }
}

function spawnBall(index) {
  ballX[index] = random(ballSize[index], width - ballSize[index]);
  ballY[index] = random(ballSize[index], height - ballSize[index]);
  ballColor[index] = color(random(255), random(255), random(255));
  ballSpeedX[index] = random(1, 3) * (random() > 0.5 ? 1 : -1);
  ballSpeedY[index] = random(1, 3) * (random() > 0.5 ? 1 : -1);
}

function changeBallColors() {
  for (let i = 0; i < ballSize.length; i++) {
    ballColor[i] = color(random(255), random(255), random(255));
  }
}

function checkBallClick(x, y, size, spawnFunction) {
  let d = dist(mouseX, mouseY, x, y);
  if (d < size / 2) {
    score++;
    spawnFunction();
  }
}

function moveAndBounceBalls() {
  for (let i = 0; i < ballSize.length; i++) {
    ballX[i] += ballSpeedX[i];
    ballY[i] += ballSpeedY[i];
    if (ballX[i] <= 0 || ballX[i] >= width) ballSpeedX[i] *= -1;
    if (ballY[i] <= 0 || ballY[i] >= height) ballSpeedY[i] *= -1;
    drawBall(ballX[i], ballY[i], ballSize[i], ballColor[i]);
  }
}

function drawBoss() {
  fill(0);
  let bossX = 350, bossY = 50;
  ellipse(bossX, bossY, 20, 20); // Head
  line(bossX, bossY + 10, bossX, bossY + 45); // Body
  line(bossX, bossY + 15, bossX - 10, bossY + 25); // Left Arm
  line(bossX, bossY + 15, bossX + 10, bossY + 25); // Right Arm
  line(bossX, bossY + 45, bossX - 10, bossY + 60); // Left Leg
  line(bossX, bossY + 45, bossX + 10, bossY + 60); // Right Leg
  textSize(10);
  text("Boss", bossX - 15, bossY - 10);
}

function bossDialog() {
  textSize(15);
  fill(0);
  let bossDialogX = 300, bossDialogY = 30; // Adjusted for better visibility

  switch (score) {
    case 110:
      text("Aghhh stop it", bossDialogX, bossDialogY);
      break;
    case 120:
      text("Stop it now", bossDialogX, bossDialogY);
      break;
    case 130:
      text("Impressive, but futile!", bossDialogX, bossDialogY);
      break;
    case 140:
      text("How are you still here?", bossDialogX, bossDialogY);
      break;
    case 150:
      text("I will make you suffer", bossDialogX, bossDialogY);
      break;
    case 170:
      text("AGGGHHHHH *dies*", bossDialogX, bossDialogY);
      break;
  }
}
