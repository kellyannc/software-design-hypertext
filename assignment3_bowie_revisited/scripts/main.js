// newdiv = document.createElement('div');
// document.querySelector('body').appendChild(newdiv);
// console.log('HI IM WORKING');

// const obj = { name: 'omar' };

function setup() {
    createCanvas(innerWidth * .8, innerHeight * .8);
    noLoop();
  
    noStroke();
    fill(random(255), random(255), random(255));
      background(random(255), random(255), random(255));
  }
  
  function draw() {
    
    let rows = height / 5;
    let cols = width / 30;
   
    //part 1: generate an array of random colors - 1 per row
        /////
    let columnColors = [];
    for (i=0; i < cols; i++){
      columnColors.push(color(random(20), random(20), random(100)));
    }
    // console.log(columnColors);
   
    for (row = 0; row < rows; row++) {
      for (col = 0; col < rows; col++) {
  
        //part 2: when adding a new circle, use the corresponding column color
                    ////
        fill(columnColors[col])
        drawThing(col * 150 + 85, row * 2 + 10);
      }
    }
  }