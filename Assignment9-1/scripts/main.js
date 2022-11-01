let colorlist = ["gold", "yellow", "turquoise", "red"];

function setup() {
    //this function runs once when the webpage is loaded
    //within this function, you can use p5
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    background(255);
}

function draw() {
    //this functions runs many times every second!
    //within this function, you can use p5 syntax
    noStroke();
    fill(random(colorlist));
    ellipse(mouseX, mouseY, 25, 25);
}


//outside of the setup and draw functions (which are automatically called) - the rest of your code here is plain old javascript