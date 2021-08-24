var boy,boyImg;
var case1,case2,case3,case4,case5,case6,case7,case8;
var gameState;
var fish;
var score = 0;

function preload(){

  caseclosed = loadImage("treasurechestclosed.jpg");
  caseopened = loadImage("treasurechestfull.jpg");
  caseempty  = loadImage("treasurechestsempty.jpg");
  boyImg = loadImage("boy.jpg");
  
  fishImg = loadImage("fishimage.jpeg");
 
}

function setup(){
  createCanvas(600,650);
  background("blue");
  
  
 

 boy = createSprite(25,100,20,20);
 boy.addImage("case",boyImg);
 boy.scale = 0.2;

 gameState = "play";
 

 case1 = new Case(Math.round(random(100,500)),120);
 
 
 case2 = new Case(Math.round(random(100,500)),180); 
 case3 = new Case(Math.round(random(100,500)),260); 
 case4 = new Case(Math.round(random(100,500)),340);                                                                  
 case5 = new Case(Math.round(random(100,500)),420);  
 case6 = new Case(Math.round(random(100,500)),500);
 case7 = new Case(Math.round(random(100,500)),580);
 case8 = new Case(Math.round(random(100,500)),620);

 fishGroup = new Group();
}

function draw(){
 background("White");
 edges = createEdgeSprites();
 bg_gif = loadImage("bg.gif");

 if(gameState === "play"){
    
 textSize(15);
 text("Score: "+score,500,25);
 textcolor = blue;


 if(keyDown(LEFT_ARROW)){
   boy.x = boy.x-10;
 }

 if(keyDown(RIGHT_ARROW)){
  boy.x = boy.x+10;
}

if(keyDown(DOWN_ARROW)){
  boy.y = boy.y+10;
}

if(keyDown(UP_ARROW)){
  boy.y = boy.y-10;
}

if(boy.isTouching(case1.box)){
  case1.casechange(case1.box);
}

if(boy.isTouching(case2.box)){
  case2.casechange(case2.box);
}

if(boy.isTouching(case3.box)){
  case3.casechange(case3.box);
}

if(boy.isTouching(case4.box)){
  case4.casechange(case4.box);
}

if(boy.isTouching(case5.box)){
  case5.casechange(case5.box);
}

if(boy.isTouching(case6.box)){
  case6.casechange(case6.box);
}

if(boy.isTouching(case7.box)){
  case7.casechange(case7.box);
}

if(boy.isTouching(case8.box)){
  case8.casechange(case8.box);
}

if(score ===3){
  textSize(30);
  text("CONGRATULATIONS",300,300);
  gameState = "nextlevel"
  vault();           
}

if(keyDown('space') && gameState === 'nextlevel'){

console.log('space');
  
}


spawnFish();
if(fishGroup.isTouching(boy)){
  gameState = "end"
}

boy.collide(case8.box);
boy.collide(case7.box);
boy.collide(case6.box);
boy.collide(case5.box);
boy.collide(case4.box);
boy.collide(case3.box);
boy.collide(case2.box);
boy.collide(case1.box);

drawSprites();

}
if(gameState === "end"){
  background("red");
  textSize(20)
  textColor = "white"
  text("Game Over",200,250);
}
}

function spawnFish(){

 if(frameCount% 60===0){
  var fish = createSprite(100,0,50,50);
  fish.x = Math.round(random(120,500));
  fish.velocityY = 3;
  fishGroup.add(fish);
  fish.addImage("image",fishImg);
  fish.scale = 0.3;
 }
  
  

}
function vault(){
  background("green");
  boy.x = 100;
  var demon = createSprite(300,300,20,20);
  demon.velocityY = 10;
  
  demon.bounceOff(edges);x
  
  var treasure = createSprite(350,200,20,20);
  
}