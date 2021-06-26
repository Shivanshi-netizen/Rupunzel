var rupunzel, princess;
var rupunzelImg,princessImg ;
var tower, backgroundImg;
var rectBox;
var ground;
var spawnGroup;
function preload(){
  rupunzelImg = loadImage("Images/princess.jpg");
  princessImg = loadImage("Images/princess.jpg");
  backgroundImg = loadImage("Images/castleBg.jpg");
 
}

function setup(){
  createCanvas(1600, 800);
  rupunzel = createSprite(130,700,80,80);
  ground = createSprite(800,750,1600,20);
  //rupunzel.addImage(rupunzelImg)

  spawnGroup = new Group();
}

function draw(){
   background ("lightGreen");
   
   if(keyDown("space")){
    rupunzel.velocityY = -10;
   }

   rupunzel.velocityY = rupunzel.velocityY+0.9;
   rupunzel.collide(ground);

   if(spawnGroup.isTouching(rupunzel)){
     rupunzel.velocityY = 0;
   }
   
   spawnBoxes();
   drawSprites();
}

function spawnBoxes(){
if(frameCount%120 === 0){
  var x = Math.round(random(200,600));
  rectBox = createSprite(1600,x,200,20);
  rectBox.velocityX = -4;
  spawnGroup.add(rectBox);
}

}
