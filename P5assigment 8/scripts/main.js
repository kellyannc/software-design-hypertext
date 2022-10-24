// // require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

// function setup() {
//   createCanvas(700, 700 );
//   noLoop();
//    // colorMode(HSB, 255);
//   noStroke();
//   fill(255, 255, 255);
// }

// function draw() {
//   background(255, 255, 255);   
//   fill(255, 255, 255);
//   let rows = height / 50;
//   let cols = width / 50;
//   for (row = 0; row < rows; row++) {
//     for (col = 0; col < rows; col++) {
//       drawThing(col * 50 + 25, row * 50 + 25);
//   // fill(random(0, 255), 200, 200);
//   // colorMode(HSB, 255);
//     }
//   }
// }
// let brownianRadius = 25;
// function drawThing(x, y) {
//   let radius;
//   // // even
//   radius = random(0, 50);
//   // very strong low bias
//   // radius = min(random(0, 50), random(0, 50), random(0, 50), random(0, 50), random(0, 50));

//   // very strong high bias
//   // radius = max(random(0, 50), random(0, 50), random(0, 50), random(0, 50), random(0, 50));

//   // very strong middle bias
//   // radius = (random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50)) * 0.2;

//   ////////////////////////////////////////////////////////////////////
//   // // curated sizes
//   // let r = random(100);
//   // if (r < 10) {
//   // 	radius = 10;
//   // } else if (r < 95) {
//   // 	radius = 20;
//   // } else {
//   // 	radius = 40;
//   // }

//   ////////////////////////////////////////////////////////////////////
// //   brownian
//   brownianRadius += random(-5, 5);
//   radius = brownianRadius;  
//   fill(random(0, 255), 200, 200);
//   colorMode(HSB, 255);
//   ellipse(x, y, radius, radius);
// }


function setup() {
  createCanvas(700, 700 );
  noLoop();

  noStroke();
  fill(255, 255, 255);
    background(50, 50, 20);
}

function draw() {
    
  let rows = height / 50;
  let cols = width / 50;
  
  //part 1: generate an array of random colors - 1 per row
	/////
  let columnColors = [];
  for (i=0; i < cols; i++){
    columnColors.push(color(random(255), random(255), random(255)));
  }
  console.log(columnColors);
  
  for (row = 0; row < rows; row++) {
    for (col = 0; col < rows; col++) {

      //part 2: when adding a new circle, use the corresponding column color
			////
      fill(columnColors[col])
      drawThing(col * 50 + 25, row * 50 + 25);
    }
  }
}

let brownianRadius = 25;

function drawThing(x, y) {
  let radius = random(0, 50);
  ellipse(x, y, radius, radius);
}