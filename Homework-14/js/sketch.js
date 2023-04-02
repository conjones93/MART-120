// x and y for my character
var characterX = 250;
var characterY = 800;
var passing = false;

// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var target1X = 50;
var target1Y = 100;

var target2X = 150;
var target2Y = 100;

var target3X = 250;
var target3Y = 100;

var target4X = 350;
var target4Y = 100;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

var shapesVisible = [true, true, true, true];

function checkCircleCollision(x1, y1, r1, x2, y2, r2){
  return (Math.abs((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))) < (r1 + r2) * (r1 + r2);
}

function circleCollision(x1, y1, x2, y2, r1, r2)
{
    let d = Math.sqrt((x1 - x2) * (x1 - x2)
                         + (y1 - y2) * (y1 - y2));

    if (d <= r1 - r2) {
        return true;
    }
    else if (d <= r2 - r1) {
        return true;
    }
    else if (d < r1 + r2) {
        return true;
    }
    else if (d == r1 + r2) {
      return false;
    }
    else {
        return false;
    }
}

function checkShapeCollision(){
  for(let x = 0; x < shapeXs.length; x++){
    let colliding = circleCollision(characterX, characterY, shapeXs[x], shapeYs[x], 25, 25);
    if (colliding && shapesVisible[x]){
      shapesVisible[x] = false;
      console.log("Hit");
    }
  }
}

function setup() {
    createCanvas(400, 800);

    createCharacter(225, 700);

    shapeXs.push(target1X);
    shapeXs.push(target2X);
    shapeXs.push(target3X);
    shapeXs.push(target4X);

    shapeYs.push(target1Y);
    shapeYs.push(target2Y);
    shapeYs.push(target3Y);
    shapeYs.push(target4Y);

}


function wonGame(){
  let shapesCleared = true;
  for (let x = 0; x < shapesVisible.length; x++){
    if(shapesVisible[x]){
      shapesCleared = false;
    }
  }
  return shapesCleared;
}

function draw() {
    background(120, 45, 78);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders(10);

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();
    drawTargets();
    shapeMovement();
    checkShapeCollision();

    // potential enemy
    fill(13, 145, 14);
    // check to see if the character has left the exit
    let winner = wonGame();
    if (winner) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }
}

function characterMovement() {

    if (passing == false){
    if (keyIsDown(a)) {
        characterX -= 10;
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
    }
    else{
        if (characterY <= 0){
            passing = false;
            characterX = 225;
            characterY = 700;
        }
        else{
        characterY -= 2;
        }
    }
}

function shapeMovement(){
    for (let x = 0; x < shapeXs.length; x++){
        shapeXs[x] += 0;
        if (shapeXs[x] >= 400){
            shapeXs[x] = 0;
        }
    }
}

function keyPressed(){
    if (key == "w"){
        passing = true;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(23, 40, 123);
    circle(characterX, characterY, 25);
}

function drawTargets(){
    for(let x = 0; x < shapeXs.length; x++){
      if (shapesVisible[x]){
        circle(shapeXs[x], shapeYs[x], 25);
      }
    }
}

function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

function hitTarget(){
    for(let x = 0; x < shapeXs.length; x++){
        if ((shapeXs[x] <= characterX + 12.5 || shapeXs[x] <= characterX - 12.5) && (shapeYs[x] >= characterY + 12.5 && shapeYs[x] <= characterY -12.5)){
            console.log("Hit");
            return x;
        }
    }

    return -1;
}
