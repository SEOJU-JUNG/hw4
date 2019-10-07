var xSpeed = 3;
var psx = 0;
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);
  translate(psx,0);
  for (var x = 70; x < width; x = x + 10) {
    line(x, height/2, x+100, height/2-75);
  }
  psx = psx + xSpeed
  if (psx <= 0){
    xSpeed = xSpeed * - 1;
  }
  if (psx >= width){
    xSpeed = xSpeed * - 1;
  }
  
  
}
