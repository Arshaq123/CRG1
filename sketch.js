var  database;

var form ;
var game;
var player;

var playerCount=0;
var gameState = 0;

function setup(){
  database = firebase.database();
  //console.log(database);
  createCanvas(500,500);

  game = new Game()
 
  game.Start()

}

function draw(){
  background("white");
  
    //text(mouseX + "," + mouseY,300,300)
    
  if(playerCount===4){

   game.updateGameState(1);

  }
    
  if (gameState===1){

    game.play();
  }
}

//creating a 4 player car racing game
//if no players are registered yet - gameState is 0 
//if 4 players are there - gameState is 1