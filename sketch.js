var x = 0;
var y = 0;
sizes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    redCircle();
    greenStripe();
    whiteLines();
    changeBackground();
    rowCircle(250);
    rowCircle(350);
    
}

function redCircle(){
     noStroke();
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 100, 100);
}

function greenStripe(){
     fill(0, 255, 0);
    x = 200;
    y +=3;
    rect(x, y, 100, height);
    
    if(y > height){
        y = 0 - height;
    }
}

function whiteLines(){
    var i = 0;
    var yLine = 20;
    while(i<10){
    stroke(255);
    line(100, yLine, 500, yLine);
    i++;
    yLine += 20;
   }
}

function changeBackground(){
    if(mouseIsPressed && mouseY < 200){
        background(0, 0, 255);
    }
    else if(mouseIsPressed && mouseY >=200){
        background(255,255,0);
    }
}

function rowCircle(yRow){
    var xCircle = 40;
    for(var i = 0; i < 10; i++){
        noStroke();
        fill(255, 255, 0);
        ellipse(xCircle, yRow, sizes[i], sizes[i]);
        xCircle += 50;
    }
}