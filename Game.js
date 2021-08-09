//this class will control the game - start , play
class Game {

    constructor(){

    }

    //read the gameState value from database
    getGameState(){
      
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", (data)=>{
         //this is defined in sketch.js
          gameState = data.val();

      });
    }

    //write database value 
    updateGameState(state){

       database.ref('/').update({
        //this is in database
        gameState : state //as per the form , update the value of gameState in database

      });
    }




    async Start(){
      if(gameState === 0){

        player = new Player();    
        var playerCountRef= await database.ref('playerCount').once("value");

        if(playerCountRef.exists()){

          playerCount = playerCountRef;
          player.getPlayerCount;
        }


        form = new Form();
        form.display();
      }

    }

    play(){


    }



    
}