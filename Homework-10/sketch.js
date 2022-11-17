var redColor = 123;
var greenColor = 39;
var blueColor = 21;
 // this function is called only once
function setup()
{
    var canvas = createCanvas(800,800);
}
/* this function is called continuously
    while the sketch is open in the browser
*/
function draw()
{
 // change the background color by updating the variables at the top
  background(redColor,greenColor,blueColor);


  circle(canvas.width / 4 + 50, canvas.height / 4, 400);

  circle(canvas.width / 4, canvas.height / 4, 100);
  circle(canvas.width / 4, canvas.height / 4, 50);
  circle(canvas.width / 4, canvas.height / 4, 25);

  circle(canvas.width / 4 + 100, canvas.height / 4, 100);
  circle(canvas.width / 4 + 100, canvas.height / 4, 50);
  circle(canvas.width / 4 + 100, canvas.height / 4, 25);

  circle(canvas.width / 3 + -50, canvas.height / 3, 70);
}
