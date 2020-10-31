var heman
function setup() {
createCanvas(400, 400);
  heman = new Heman1();
  frameRate(15);
}

function draw() {
  background(220);
  heman.mostrar();
  if (keyIsPressed && keyCode == 39){
    heman.moverDer();
    scale(-0.5,0.5);

  }
  if (keyIsPressed && keyCode == 37){
    heman.moverIzq();
  }
}