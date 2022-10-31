newdiv = document.createElement('div');
document.querySelector('body').appendChild(newdiv);
console.log('HI IM WORKING');

const obj = { name: 'omar' };

function setup () {
    createCanvas(640, 360);
}

function draw () {
    rect (100, 200, 75, 150);
}
console.log('blah')



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