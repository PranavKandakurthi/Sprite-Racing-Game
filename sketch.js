var database;
var gameState = 0
var playerCount;
var form, player, game;
var allPlayers;
var car1, car2, car3, car4, cars;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-50,displayHeight-70);

  game = new Game();
  game.getState();
  game.start();


  
}

function draw(){
  //background("white");
  
    if (playerCount ===4){
      game.update(1);
    }
    if(gameState ===1){
      clear();
      game.play();
    }
  
}


