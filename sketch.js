var bullet, wall;
var speed, weight, thickness, damage;


function setup() {
  
  createCanvas(1600, 400);
  
  speed = random(55, 90);
  weight = random(400, 1500);
  thickness = random(22, 83);

  bullet = createSprite(60, 200, 10, 5);
  bullet.shapeColor = color(230,230,0);
  wall = createSprite(1500, 200, thickness, height/2);

  
  
}

function draw() {
  
  background("black");  

  bullet.velocityX = speed;
  
  if(wall.x - bullet.x < (bullet.width + wall.width)/2) {

     bullet.velocityX = 0;

     damage = (0.5 * weight * speed * speed) / thickness * thickness * thickness;

     if(damage >= 10) {

      wall.shapeColor = color(255,0,0);
     }

     else if(damage >= 5 && damage < 10) {

      wall.shapeColor = color(230,230,0);
   }

     else if(damage < 5) {

      wall.shapeColor = color(0,255,0);
   }
 }

  drawSprites();
}