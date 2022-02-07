class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef= await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    // creamos sprites de coches:
   cari= createSprite(100,200);
   cari.addImage(cariI);
   carii=createSprite(300,200);
   carii.addImage(cariiI);
   cariii=createSprite(500,200);
   cariii.addImage(cariiiI);
   cariv=createSprite(700,200);
   cariv.addImage(carivI);
    cars=[cari,carii,cariii,cariv];
  }
   
 // funcion play, esconder los botones desde form, text, sacar la informacion del jugador 
  play(){

    background("#c68767");
    image(track,0,windowHeight*-4,windowWidth,windowHeight*5);
    
    form.hide();
    text("listos?  YA" , 120,100)
    Player.information()
    player.getRank()

    if (allplayers != undefined){
      // var disPos =130
      var index=0
      var posx=160
      var posy=0
      for(var p in allplayers){
        posx += 200
        posy = windowHeight-allplayers[p].distance
        
        cars[index].x= posx
        cars[index].y=posy
        index ++                                 
        if(index===player.index){   
          fill(225,246,0)             
          triangle(cars[index-1].x, cars[index-1].y+50, cars[index-1].x-20, cars[index-1].y+70, cars[index-1].x+20, cars[index-1].y+70); 
          camera.position.x=windowWidth/2       
          camera.position.y=cars[index-1].y     
        }                                      
        
        // if(index===player.index-1){
          //  cars[index].shapeColor="red"
        //camera.position.x=windowWidth/2
        //camera.position.y=cars[index].y 
        //  }
        //index ++








        
        // disPos= disPos+20 
        //   if(p==="player"+player.index){
        //     fill("red");
        //   }else{
        //     fill("black")
        //   }
        // text(allplayers[p].name+": "+allplayers[p].distance, 120, disPos)
      }

    }


      text(mouseX+","+mouseY,mouseX+10,mouseY);
     
    
    if(keyIsDown(UP_ARROW)&& player.index != null){
      player.distance += 50;
      player.update();
    }
    if(player.distance>3860){
      gameState= 2
      player.rank ++
      Player.updateRank(player.rank)
    }
    

    
    drawSprites();
  }

  end(){
    console.log('funciona');
    console.log(player.rank);
    push()
    textAlign(CENTER)
    textSize(20)
    textFont("Times New Roman") //font= fuente 
    if ( player.rank === 1){
      text("felicidades "+ player.name + "  " + player.rank+ " lugar",windowWidth/2, camera.position.y)
    } else {
      text(player.name + " Tu lugar es el "+player.rank,windowWidth/2, camera.position.y)
    }
    pop()
  }

  
}















