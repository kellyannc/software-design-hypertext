let colorlist = ["gold", "yellow", "turquoise", "red"];

function setup() {
    //this function runs once when the webpage is loaded
    //within this function, you can use p5
    createCanvas(windowWidth * 0.8, windowHeight * 0.8)

 
} 

// background(255,120,255);

//  for (let x = 10; x <= width; x += 50) {
//   fill(0, 200, 0);
//  line(x, 400, 20, 20);

// }

function draw() {
  //this functions runs many times every second!
  //within this function, you can use p5 syntax
  background(10, 30, 60);
  noStroke();
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 30,30);
  rect(mouseX, 10, 10, 10);

  for (let x = 0; x <= width; x += 50) {
    fill(0, 255, 200);
    line(x, 300, 12, 10);
    stroke(random(colorlist));
  }

  for (let x = 0; x <= width; x += 50) {
    fill(255, 0, 200);
    ellipse(x, 300, 12, 25);
  }

  for (let x = 25; x <= width; x += 50) {
    fill(0, 0, 200);
    ellipse(x, 300, 12, 25);
  }
}



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

// function setup () {
// let year = 2019;

// if (year == 2015) {
//   console.log("you're 6 years off my friend");
// } else if (year == 2016) {
//   console.log("you're 5 years off my friend");
// } else if (year == 2017) {
//   console.log("you're 4 years off my friend");
// } 
// // else if (year >= 2018) {
// //   console.log('uh close enough');
// // }
// else if (year >= 2018) {
//   console.log('idk man');
// }
// }

// function testFunction(p1, p2) {
//   return p1 * p2;
// }
// let x = 5, y = 6;
// let z = testFunction(5, 6)
// console.log(z);

// let x = 5;
// let y = 6;
// let z = x + y;
// console.log(y)



// outside of the setup and draw functions (which are automatically called) - the rest of your code here is plain old javascript