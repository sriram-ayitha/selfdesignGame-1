var boy,boyImg;
var case1,case2,case3,case4,case5,case6,case7,case8;
var gameState;
var fish;
var demon;
var treasure;
var arrowSprite;
var arrowGroup;
var score = 0;
var gameState = 0;

function preload(){

 
  boyImg = loadImage("boy.jpg");
  arrowImage = loadImage("arrow0.png");
  demonImage = loadImage("demonImage.png");
  fishImg = loadImage("fishimage.jpeg");
  treasureImg = loadImage("01gold.jpg");
 
}

function setup(){
  createCanvas(600,650);
  
  edges = createEdgeSprites();
  demon = createSprite(300,300,20,20);
  demon.velocityY = 10;
  treasure = createSprite(500,200,20,20);
  treasure.addImage("gold",treasureImg);
  treasure.scale = 0.3;

  arrowGroup = new Group();

  
  
 //bow = createSprite(60,100,20,20);
 //bow.addImage("base",bowImage);

 boy = createSprite(25,100,20,20);
 boy.addImage("case",boyImg);
 boy.scale = 0.2;

 demon.addImage("demon",demonImage);
 demon.scale = 0.2;




}

function draw(){
 background("blue");
 
  boy.x = 100;  
  demon.bounceOff(edges);
  
  
  if (keyDown("space") && frameCount%9 === 0 ) {
    arrow()
    gameState = 1;
  }
  
  boy.y = mouseY;

 if(gameState ===1){

  if(arrowGroup.isTouching(demon)){
    score +=1;
    arrowGroup.destroyEach();
    
  }
   
 }

  
   
  if(score === 5){
    demon.destroy(); 
    console.log('demonkill');
    gameState = 2;
    
  }

  if(gameState ===2){
    boy.x = mouseX;
    if(boy.isTouching(treasure)){
      gameState =3;
      gameEnd();
    }
  }
  
  
  drawSprites();

 
 
}
function arrow(){

  //if(frameCount%20 === 0){
  arrowSprite = createSprite(70,100,0,0);
  arrowSprite.addImage("arrow0",arrowImage);
  arrowSprite.y = boy.y
  arrowSprite.velocityX =6;
  arrowSprite.scale=0.3;
  arrowGroup.add(arrowSprite);
 // }

}
function gameEnd(){
  background(treasureImg);
  fill("white");
  textSize(20);
  text("CONGRATULATIONS YOU WON THE GAME",100,90);
  boy.x = 0;
  boy.y = 0;
  //boy.destroy();
  arrowGroup.destroyEach();
    
}