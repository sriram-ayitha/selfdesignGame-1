var boy,boyImg;
var case1,case2,case3,case4,case5;
var case1touched = 0;
var case2touched = 0;
var case3touched = 0;
var case4touched = 0;
var case5touched = 0;
var case6touched = 0;
var case7touched = 0;

function preload(){

  caseclosed = loadImage("treasurechestclosed.jpg");
  caseopened = loadImage("treasurechestfull.jpg");
  caseempty  = loadImage("treasurechestsempty.jpg");
  boyImg = loadImage("boy.jpg");
}

function setup(){
  createCanvas(600,600)
 

 boy = createSprite(25,100,20,20);
 boy.addImage("case",boyImg);
 boy.scale = 0.2;

 case1 = createSprite(100,100,10,10);
 case1.addImage("case",caseclosed);
 case1.scale = 0.2; 
 case2 = createSprite(100,180,10,10);
 case2.addImage("case",caseclosed);
 case2.scale = 0.2;  
 case3 = createSprite(100,260,10,10);
 case3.addImage("case",caseclosed);
 case3.scale = 0.2; 
 case4 = createSprite(100,340,10,10);
 case4.addImage("case",caseclosed);
 case4.scale = 0.2;                                                                    
 case5 = createSprite(100,420,10,10);
 case5.addImage("case",caseclosed);
 case5.scale = 0.2; ;  
 case6 = createSprite(100,500,10,10);
 case6.addImage("case",caseclosed);
 case6.scale = 0.2; 
 case7 = createSprite(100,580,10,10);
 case7.addImage("case",caseclosed);
 case7.scale = 0.2; 
 case8 = createSprite(250,100,10,10);
 case8.shapeColor = "yellow";
 case9 = createSprite(250,180,10,10);
 case9.shapeColor = "green";
 case10 = createSprite(250,260,10,10);
 case10.shapeColor = "yellow"; 
 case11 = createSprite(250,340,10,10);
 case11.shapeColor = "green";
 case12 = createSprite(250,420,10,10);
 case12.shapeColor = "yellow";
 case13 = createSprite(250,500,10,10);
 case13.shapeColor = "green";
 case14 = createSprite(250,580,10,10);
 case14.shapeColor = "yellow";
}

function draw(){
 background("white");

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

if(boy.isTouching(case1) && case1touched===0){
  case1touched = 1;
  casechange(case1);

}

if(boy.isTouching(case2) && case2touched===0){
 case2touched = 1;
 casechange(case2);
}

if(boy.isTouching(case3) && case3touched===0){
  case3touched = 1;
  casechange(case3);
 }

 if(boy.isTouching(case4) && case4touched===0){
  case4touched = 1;
  casechange(case4);
 }

 if(boy.isTouching(case5) && case5touched===0){
  case5touched = 1;
  casechange(case5);
 }

 if(boy.isTouching(case6) && case6touched===0){
  case6touched = 1;
  casechange(case6);
 }

 if(boy.isTouching(case7) && case7touched===0){
  case7touched = 1;
  casechange(case7);
}
boy.collide(case7);
boy.collide(case6);
boy.collide(case5);
boy.collide(case4);
boy.collide(case3);
boy.collide(case2);
boy.collide(case1);
createEdgeSprites();
  drawSprites();
}

function casechange(caseSprite){

  var r = Math.round(random(1,2))
  console.log(r);
  switch (r){
    case 1 : caseSprite.addImage("caseopen",caseopened);
             caseSprite.changeImage("caseopen",caseopened);
          break;
    case 2 : caseSprite.addImage("caseempty",caseempty);
             caseSprite.changeImage("caseempty",caseempty);
            break;
    default : break;               

  } 
}

