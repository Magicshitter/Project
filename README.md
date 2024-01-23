## GAME NAME: DONT GO PAST 100

// Variables for Ball Properties
// These arrays store the properties of each ball like position, size, and color.
let ballX = [], ballY = [], ballSize = [], ballColor = [], ballSpeedX = [], ballSpeedY = [];

// Score and Custom Font Variables
// 'score' keeps track of the player's score, and 'customFont' will hold a font style.
let score;
let customFont;

// Game State
// This variable keeps track of the current state of the game like menu, playing, or GitHub page.
let gameState = 'menu';

// Preload Function
function preload() {
  // Loading custom font and sound file
  customFont = loadFont('2.ttf');
}

// Setup Function
function setup() {
  // This function sets up the initial environment. It's called once at the start.
  createCanvas(200, 200);
  // ... (initializes balls and sets score to 0)
}

// Draw Function
function draw() {
  // This is the game's heartbeat! It continuously updates the game's visuals and logic.
  // Depending on the game state, it shows the menu, game, or GitHub page.
}

// Other Functions
// These include functions to handle ball drawing, score display, sound playing, etc.

// Sound Playing Logic
// When the score reaches a certain point, we play a sound. This is controlled in part of the 'draw' function.
