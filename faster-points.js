function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {  
  for (var x = 0; x < width; x = x + 100){
    for (var y = 0; y < height; y = y + 100){
      stroke(x, y, 100);
      point(random(x, x+100), random(y, y+100));
      
    }
  }
}
