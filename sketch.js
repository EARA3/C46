var form;
var gameState = 0;
var game;
var player;
var database;
var player1, player2;
var playerCount;
var ball;
var wall1,wall2,wall3,wall4;

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();
}

function draw() {
  background("light-blue");  
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}