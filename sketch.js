var bullet;
var speed,weight,thickness;
var wall;


function setup() 
{
  createCanvas(1600,400);
  
  speed=random(120,321);
  thickness=random(30,152);
  weight=random(400,1500);

  bullet = createSprite (50,200,150,20);
  bullet.shapeColor = "white";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  
}

function draw() 
{

  background(0);  
    
  bullet.velocityX= speed;
  
if (bullet.x-wall.x === wall.width/2+bullet.width/2
  &&wall.x-bullet.x < wall.width/2+bullet.width/2
  &&bullet.y - wall.y < wall.height/2 + bullet.width/2
  &&wall.y - bullet.y < wall.height/2 + bullet.width/2)
{
}
else
{
  bullet.shapeColor="white";
  wall.shapeColor="blue";
}

if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
  if(deformation>10)
  {
    bullet.shapeColor=color(255,0,0);
    //bullet.shapeColor = "red";
    //wall.shapeColor = "red";
  }
  if(deformation<10)
  {
    bullet.shapeColor=color(0,255,0);
  }
}
textSize(30);
text("Bullet Speed: ",220,50,);
text(speed,420,50);
text("meter / Second", 720, 50);
drawSprites();
}