var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var cari, carii, cariii, cariv;
var cars;
var database;
var form, player, game;
var allplayers;
var cariI, cariiI, cariiiI, carivI, track;

function preload(){
  cariI = loadImage("images/car1.png");
  cariiI =loadImage("images/car2.png");
  cariiiI = loadImage("images/car3.png");
  carivI=loadImage("images/car4.png");
  track= loadImage("images/track.jpg");

}

function setup(){
  canvas = createCanvas(windowWidth-30,windowHeight-30);
  database = firebase.database();

  
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
if (playerCount===4){
  game.update(1);
}
if (gameState===1){
  clear();
  game.play();
}
if(gameState===2){
  game.end();
}


}

function keyPressed(){
  if(keyCode===32){
    game.update(0);
    player.updateCount(0);
  }
}
