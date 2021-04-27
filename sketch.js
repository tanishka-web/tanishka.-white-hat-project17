
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime
var background1_image,background1

function preload(){
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
 background1_image=loadImage("back3.jpg")
  
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}

function setup() {
  createCanvas(600,400);
background("green");
  score=0;
  survivaltime=0
  background1=createSprite(10,2,90,90);
  background1.addImage("back", background1_image)
  
  monkey=createSprite(60,380,50,50);
  monkey.addAnimation("monkey", monkey_running)
  monkey.scale=0.12
  
  base=createSprite(30,390,2000,20)
  base.visible=true
  
   
  
}


function draw() {
 
    background1.velocityX=-5;
  if(background1.x < 0){
 background1.x=background1.width/2;
  }
    
  if(keyDown("space")&&monkey.y >=300){
    monkey.velocityY=-10
  }
    
  monkey.velocityY = monkey.velocityY + 0.3;
  monkey.collide(base)
  
  

  banana1();
  obstacle1();
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach()
  score=score+1
  }
  
  drawSprites();
  fill("black");
  textSize(23)
  text("score: "+score,30,20);
  
   fill("black")
  
  text("Survival Time: "+ survivaltime,390,22);
  survivaltime = survivaltime + Math.round(getFrameRate()/60);
    
}

function banana1(){
if (frameCount % 80 === 0) {
     banana = createSprite(600,120,40,10);
  banana.y = Math.round(random(120,200));
    banana.addImage("ban",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
  banana.lifetime= -1;
    FoodGroup.add(banana)
}
}


function obstacle1(){
if (frameCount % 300 === 0) {
     obstacle = createSprite(400,220,40,10);
  obstacle.y = Math.round(random(360,360));
    obstacle.addImage("obs",obstaceImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;
  obstacle.lifetime=90
 obstacleGroup.add(obstacle)
}
}





