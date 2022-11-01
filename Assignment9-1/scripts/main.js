

function setup() {
    createCanvas(windowWidth, 400, WEBGL);
    normalMaterial();
  }

  function draw() {
    background(200, 10, 50);
    noStroke();
smooth();

createVector(6, 6, 6)

    let locX = mouseX - width / 6;
  let locY = mouseY - height / .6;
    orbitControl(5, 5, 10);
    rotateX(10);
    rotateY(10);
    pointLight(15, 200, 50, locX, locY, 0);
  noStroke();

   
colorMode(RGB, 100, 200, 166);
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    sphere(i, j, 35);
    sphere(i, j);
  }
  smooth(200);
  sphere(90);
  scale(.2, 0.5, .8);


}
  }