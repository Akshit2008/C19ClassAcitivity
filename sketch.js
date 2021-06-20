var tower,towerImg;
var door,doorImg;
var climber,climberImg,invisibleb;
var doorGroup,climberGroup,invisiblebGroup;
var ghost,ghostImg;
var gameState="play";
var sound;
function preload()
{
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
  sound=loadSound("spooky.wav");
}
function setup()
{
  createCanvas(600,600);
  //sound.loop();
  tower=createSprite(270,300);
  tower.addImage(towerImg);
  //tower.scale=0.9;
  tower.velocityY=4;
  
  ghost=createSprite(300,300,10,10);
  ghost.addImage(ghostImg);
  ghost.scale=0.3;
  
  
  doorGroup=new Group();
  climberGroup=new Group();
  invisiblebGroup=new Group();
  
  
  
  
}
function draw()
{
  background("black");
  if(gameState==="play"){
    
  
  if(tower.y>400)
  {
    tower.y=300;
  }
  
  if(keyDown(LEFT_ARROW)){
    ghost.x=ghost.x-3;
  }
  
  if(keyDown(RIGHT_ARROW)){
    ghost.x=ghost.x+3;
  }
  
  if(keyDown("Space")){
    ghost.velocityY=-12;
    }
   ghost.velocityY=ghost.velocityY+0.8;
    Spawnobjects();
   if(climberGroup.isTouching(ghost)){
     ghost.velocityY=0;
   }
  if(invisiblebGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState="end";
  }
 
  
  drawSprites();
  }
  if(gameState==="end"){
    fill("yellow");
    textSize(30);
    text("gameOver",230,250);
  }
}
function Spawnobjects(){
  if(frameCount%240===0)
  {
    door=createSprite(200,10,10,10);
    door.addImage(doorImg);
    door.velocityY=4;
    door.x=Math.round(random(100,400));
    door.lifetime=400;
    doorGroup.add(door);
    
    climber=createSprite(200,70,10,10);
    climber.addImage(climberImg);
    climber.velocityY=4;
    climber.x=door.x;
    climber.lifetime=400;
    climberGroup.add(climber);
    
    invisibleb=createSprite(200,80,100,10);
    invisibleb.visible=false;
    invisibleb.debug=true;
    invisibleb.velocityY=4;
    invisibleb.x=climber.x;
    invisibleb.lifetime=400;
    invisiblebGroup.add(invisibleb);
    
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    
    ghost.depth=climber.depth;
    ghost.depth=ghost.depth+1;
    
    ghost.depth=invisibleb.depth;
    ghost.depth=ghost.depth+1;
  }
}