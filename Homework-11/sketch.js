var characterX = 50;
var characterY = 25;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;

function setup ()
{
  createCanvas(800,600);

  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

}


function draw ()
{
  background (150, 50, 70);
  stroke(0);
  fill(0);

  rect(0,0,width,10);
  // top
  rect(0, 0, 10, height);
  // left
  rect(0, hieght-10, width, 10);
  // bottom
  rect(width-10,0,10,height-50);
  // right upper

  textSize(16);
  text("EXIT", width-50, height-50)

  fill(23,40,125);
  circle(characterX, characterY,25);

  if(keyIsDown(w))
  {
    characterY -= 10;
  }
  x+=10;
}

if(shapeX > width)
}
shapeX = 0;
}
if(shapeX < 0)
{
  shapeY = width;
}
if(shapeY > hieght)
{
  shapeY = 0;
}
if(shapeY < 0)
{
  shapeY = height;
}
