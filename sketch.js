var database;
var gameState = 0
var playerCount
var allPlayers
var car1, car2, car3, car4, cars
var distance = 0;
var form, player, game

function setup(){
  database = firebase.database();
  createCanvas(displayWidth,displayHeight);
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  background("white");
  if(playerCount === 4){
    game.updateState(1)
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
