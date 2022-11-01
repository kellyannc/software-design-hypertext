let r, g, b;

function setup() {
  console.log("setup, grass");
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);

  noStroke();
  fill(255, 255, 255);

  noLoop();
}

function draw() {
  console.log("draw, grass");
  // background(40, 40, 40);

  fill(r, g, b);
  rect(0, height * 0.5, width, height * 0.5);

  stroke(r, g, b)
  // color(255, 0, 255);

  // drawGrass(0, height * 0.5 - 100, width, 300);
  // //stroke(240, 240, 240);
  drawGrass(10, height * 0.5 - 100, width, 100);
  //drawGrass(0, height * 0.5 - 100, width, 100);
}

function drawGrass(left, top, width, height) {
  // loop from the left to the right, one pixel per step
  for (let x = left; x < left + width; x++) {
    // x and y are the base of the blade of grass
    const y = top + height;

    // height of the grass
    // pick lowest of three "rolls" to bias strongly towards short blades
    // with occasional long ones

    
    const bladeHeight = max(
      random(0, height),
      random(0, height),
      random(0, height)
    );

    // horizontal offset of top of blade relative to base
    // average two "rolls" to bias towards middle
    let bladeLean = (random(-1, 1) + random(-1, 1)) * 3;
    // scale lean by height so that shorter blades aren't more leany
    bladeLean = bladeLean * bladeHeight;
    // scaling factor to to taste
    bladeLean = bladeLean * 0.2;

    
    ////
    //CHANGE THE COLOR OF THE GRASS
    ////
		let randomGreen = color(0, random(255), 0);
    stroke(randomGreen);
    line(x, y, x + bladeLean, y - bladeHeight);
  }
}