var characterX = 70;
var characterY = 50;

var w = 90;
var s = 80;
var a = 60;
var d = 70;

var shapeX = 30;
var shapeY = 60;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;

function setup() {
createCanvas (600, 800)

shapeXSpeed = Math.floor(Math.random() + (math.floor(Math.random() * 5)) + 1);
//X
  shapeYSpeed = Math.floor(Math.random() + (math.floor(Math.random() * 5)) + 1);
  //Y

  createCharacter(200,400);
}


function draw() {
background(200,70, 100);
stroke(0);
fill(0);
move();
bounce();
display();
drawCharacter(250, 400)

textSize(16);
text("EXIT", width-60,height-60)

drawCharacter();
characterMovement();
}
