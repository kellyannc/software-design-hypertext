
// // ASSIGNMENT 7 EXERCISES

// let colorlist = ["gold", "yellow", "turquoise", "red"];

// function setup() {
//     //this function runs once when the webpage is loaded
//     //within this function, you can use p5
//     createCanvas(windowWidth * 0.8, windowHeight * 0.8)

 
// } 

// // background(255,120,255);

// //  for (let x = 10; x <= width; x += 50) {
// //   fill(0, 200, 0);
// //  line(x, 400, 20, 20);

// // }

// function draw() {
//   //this functions runs many times every second!
//   //within this function, you can use p5 syntax
//   background(10, 30, 60);
//   noStroke();
//   fill(random(colorlist));
//   ellipse(mouseX, mouseY, 30,30);
//   rect(mouseX, 10, 10, 10);

//   for (let x = 0; x <= width; x += 50) {
//     fill(0, 255, 200);
//     line(x, 300, 12, 10);
//     stroke(random(colorlist));
//   }

//   for (let x = 0; x <= width; x += 50) {
//     fill(255, 0, 200);
//     ellipse(x, 300, 12, 25);
//   }

//   for (let x = 25; x <= width; x += 50) {
//     fill(0, 0, 200);
//     ellipse(x, 300, 12, 25);
//   }
// }

// ASSIGNMENT 7 EXERCISES

// function setup () {
//     createCanvas(640, 360);
//   background(255,33,100);
// }

// function draw () {
//   noStroke();
//     //   background(255,33,100);
//    fill(color(200,10,40));
//   ellipse(100, 400, 75, 125);
//     rect(300, 200, 75, 150);
// }


// // ASSIGNMENT 7 Exercises -FACE

// function setup () {
//     createCanvas(640, 360);
//   background(255,33,100);
// }

// function draw () {
// //   noStroke();
//     //   background(255,33,100);
//    fill(color(200,10,40));
//   ellipse(200, 200, 300, 300);
//   ellipse(200, 250, 100, 73);
//   ellipse(140,130,30, 30);
//   ellipse(240,130,30, 30);

// console.log()
// rect(300, 200, 75, 150);
// }

// ASSIGNMENT 7 IF THEN RETURN CERTAIN TEXT

// function setup () {
// let year = 2019;

// if (year == 2015) {
//   console.log("you're 6 years off my friend");
// } else if (year == 2016) {
//   console.log("you're 5 years off my friend");
// } else if (year == 2017) {
//   console.log("you're 4 years off my friend");
// } 
// else if (year >= 2018) {
//   console.log('uh close enough');
// }
// // else if (year >= 2018) {
// //   console.log('idk man');
// // }
// }


// ASSIGNMENT 7 IF THEN RETURN CERTAIN TEXT


// function testFunction(p1, p2) {
//   return p1 * p2;
// }

// // // below multiplies 5x6
// let x = 5, y = 6;
// let z = testFunction(5, 6)
// console.log(z);

// // // below returns y which is 6
// // let x = 5;
// // let y = 6;
// // let z = x + y;
// // console.log(y)



// //  ASSIGNMENT 8 Circle on grid and columns random same color

// function setup() {
//   createCanvas(700, 700 );
//   noLoop();

//   noStroke();
//   fill(255, 255, 255);
//     background(50, 50, 50);
// }

// function draw() {
    
//   let rows = height / 50;
//   let cols = width / 50;
  
//   //part 1: generate an array of random colors - 1 per row
// 	/////
//   let columnColors = [];
//   for (i=0; i < cols; i++){
//     columnColors.push(color(random(255), random(255), random(255)));
//   }
//   console.log(columnColors);
  
//   for (row = 0; row < rows; row++) {
//     for (col = 0; col < rows; col++) {

//       //part 2: when adding a new circle, use the corresponding column color
// 			////
//       fill(columnColors[col])
//       drawThing(col * 50 + 25, row * 50 + 25);
//     }
//   }
// }

// let brownianRadius = 25;

// function drawThing(x, y) {
//   let radius = random(0, 50);
//   ellipse(x, y, radius, radius);

// }

// // ASSIGNMENT 8 Circle on grid and rows random color

// function setup() {
//   createCanvas(700, 700 );
//   noLoop();

//   noStroke();
//   fill(255, 255, 255);
//     background(50, 50, 20);
// }


// function draw() {
    
//   let rows = height / 50;
//   let cols = width / 50;
  
  
//   for (row = 0; row < rows; row++) {
//     //draw each row with a randomly chosen color
//      fill(random(255), random(255), random(255))
//     for (col = 0; col < rows; col++) {
//       drawThing(col * 50 + 25, row * 50 + 25);
//     }
//   }
// }

// let brownianRadius = 25;

// function drawThing(x, y) {
//   let radius = random(0, 50);
//   ellipse(x, y, radius, radius);



// }

// // Assignment 8 GRASS CODE - Grass color changes randomly on refresh

// This example draws a row of lines. The height and lean of each line is chosent at random to create a natural, grass-like appearance.

// console.log("hello, grass");


// let r, g, b;

// function setup() {
//   console.log("setup, grass");
//   createCanvas(windowWidth, windowHeight);
//   r = random(255);
//   g = random(255);
//   b = random(255);

//   noStroke();
//   // fill(255, 255, 255);

//   noLoop();
// }

// function draw() {
//   console.log("draw, grass");
//   // background(40, 40, 40);

//   fill(r, g, b);
//   rect(0, height * 0.5, width, height * 0.5);

//   stroke(r, g, b)
//   // color(255, 0, 255);

//   // drawGrass(0, height * 0.5 - 100, width, 300);
//   // //stroke(240, 240, 240);
//   drawGrass(10, height * 0.5 - 100, width, 100);
//   //drawGrass(0, height * 0.5 - 100, width, 100);
// }


// function drawGrass(left, top, width, height) {
//   // loop from the left to the right, one pixel per step
//   for (let x = left; x < left + width; x++) {
//     // x and y are the base of the blade of grass
//     const y = top + height;


//     // height of the grass
//     // pick lowest of three "rolls" to bias strongly towards short blades
//     // with occasional long ones
//     const bladeHeight = min(
//       random(200, height * .8),
//       random(255, height * .5),
//       random(50, height)
//     );

//     random(r)
//     random(g)
//     random(b);

//     // horizontal offset of top of blade relative to base
//     // average two "rolls" to bias towards middle
//     let bladeLean = (random(-1, 1) + random(-1, 1)) * 0.5;
    

//     // scale lean by height so that shorter blades aren't more leany
//     bladeLean = bladeLean * bladeHeight * .5;

//     // scaling factor to to taste
//     bladeLean = bladeLean * 1;

//     // draw the grass
//     line(x, y, x + bladeLean, y - bladeHeight)

//   }
// // // When the user clicks the mouse
// // function mousePressed() {
// //   // Check if mouse is inside the circle
// //   let d = dist(mouseX, mouseY, 360, 200);
// //   if (d < 100) {
// //     // Pick new random color values
// //     r = random(0);
// //     g = random(0, 255);
// //     b = random(0);
// //   }
// // }
// }


// // Assignment 8 GRASS CODE - each blade of grass with a randomly-chosen shade of green


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


