
var monkey , monkey_running 
var banana ,bananaImage,stone,stoneImage;
var obstacleGroup,FoodGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(400, 400);
  
 monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  //console.log(monkey.x)
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  
  score=0;
  
   FoodGroup = createGroup();
   obstacleGroup = createGroup();
}


function draw() {
  
  background("white")
  
  text("Survival Time: "+ score, 200,50);
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  score = score + Math.round(getFrameRate()/60);
  
  monkey.velocityY=monkey.velocityY+0.8;

  monkey.collide(ground)
  
 food();
 obstacle();
  
  drawSprites();
  
}

function food(){
  if(World.frameCount%100===0){
    banana=createSprite(600,300,20,20);
    banana.addAnimation("banana",bananaImage);
    banana.y=Math.round(random(100,240));
    banana.velocityX=-8;
    banana.lifetime=70
    banana.scale=0.1;
    FoodGroup.add(banana)
  }
}

function obstacle(){
  if(World.frameCount%80===0){
    stone=createSprite(400,310,20,20);
    stone.addAnimation("obstacle",stoneImage);
    stone.velocityX=-7;
    stone.scale=0.2
    stone.lifetime=70;
    
    stone.depth=monkey.depth;
    monkey.depth=monkey.depth+1
    
    obstacleGroup.add(stone);
  }
}
