function setup() {
  var myCanvas = createCanvas(130, 200);
  myCanvas.parent('p5LogoCanvas');
  background(231);
}

function draw() {
  if (mouseIsPressed) {
    fill(51,51,51);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}