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
  
  let brownianRadius = 100;
  
  function drawThing(x, y) {
    let radius = random(40, 100);
    ellipse(x * .2, y, radius, radius);
    // ellipse(x / 3, y / 8, radius, radius);
    ellipse(x, 400, radius, radius);
    ellipse(x * .6, 700, radius, radius);
    // ellipse(x, 60, radius, radius);
    ellipse(x, y * .2, radius, radius);


    // noStroke();

    line(600, 0, 800, 800);
    line(random(255), random(255), random(255));
    strokeWeight(400);   

    line(800, 0, 0, 800);
    stroke(random(255), random(255), random(255));
    strokeWeight(1);   
0
    line(800, 0, 300, 800);
    stroke(random(255), random(255), random(255));
    strokeWeight(1);   

    line(800, 0, 600, 800);
    stroke(random(255), random(255), random(255));
    strokeWeight(1);   

    line(800, 0, 1800, 1500);
    stroke(random(255), random(255), random(255));
    strokeWeight(2);   

    line(900, 0, 1800, 500);
    stroke(random(255), random(255), random(255));
    strokeWeight(1);   

    line(900, 0, 400, 1800);
    stroke(random(255), random(255), random(255));
    strokeWeight(2);   

    line(30, 0, 800, 800);
    stroke(random(255), random(255), random(255));
    strokeWeight(1);  
    
    line(0, 00, 800, 800);
    stroke(random(255), random(255), random(255));
    strokeWeight(1); 

    line(0, 40, 800, 800);
    stroke(random(255), random(255), random(255));
    strokeWeight(1); 

    line(600, 0, 800, 800);
    stroke(255);
    strokeWeight(1); 

    line(400, 0, 400, 900);
    stroke(255);
    strokeWeight(1); 

    line(200, 0, 370, 900);
    stroke(255);
    strokeWeight(1); 

    line(1800, 0, 1900, 0);
    stroke(random(255), random(255), random(255));
    strokeWeight(1); 

    line(500, 0, 600, 800);
    stroke(255);
    strokeWeight(1);

    line(0, 0, 40, 800);
    stroke(255);
    strokeWeight(1);

    line(0, 1, 600, 1500);
    stroke(255);
    strokeWeight(1);

    line(800, 0, 800, 800);
    stroke(255);
    strokeWeight(1); 

    line(800, 300, 1800, 1800);
    stroke(255);
    strokeWeight(1); 

    line(800, 300, 300, 0);
    stroke(255);
    strokeWeight(2); 

    line(1800, 300, 300, 1800);
    stroke(255);
    strokeWeight(1); 

    line(90, 0, 400, 1800);
    stroke(255);
    strokeWeight(1); 

    line(90, 0, 400, 1800);
    stroke(255);
    strokeWeight(1); 

    line(1900, 0, 0, 700);
    stroke(255);
    strokeWeight(1); 

    line(1900, 0, 400, 800);
    stroke(255);
    strokeWeight(1); 

    line(0, 0, 1500, 100);
    stroke(random(255), random(255), random(255));
    strokeWeight(1); 

    line(0, 1800, 0, 1900);
    stroke(random(255), random(255), random(255));
    strokeWeight(1); 

    line(1800, 1800, 0, 1900);
    stroke(random(255), random(255), random(255));
    strokeWeight(1); 

    line(1800, 0, 600, 1800);
    stroke(random(255), random(255), random(255));
    strokeWeight(1); 

    line(800, 0, 0, 800);
    stroke(random(255), random(255), random(255));
    strokeWeight(400); 

}
  