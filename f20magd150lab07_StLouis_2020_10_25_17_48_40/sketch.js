w=0;
rain1 = [];
var x,y,g,b;
function setup() {
  createCanvas(680, 550);
  
}

function draw() {
  background(0,g,b); //Background set up(trees and grass).
  noStroke();
  fill(0,150,0);
  rect(0,450,680,200);
  fill(139,69,19);
  rect(375,450,75,-300);
  fill(0,215,0);
  ellipse(350,150,150,150);
  ellipse(475,135,150,150);
  ellipse(400,75,150,150);
  ellipse(400,130,150,150);
  if(w==1){ //If w equals 1 it will turn into a rainy day.
    g=100;
    b=200
 for (i = 0; i < 100; i++) { //Puts random x and y cordinates for rain drops to make it look like it is raining.
    rain1[i] = new rain(random(0, width),random(-500,2000));
  }
  for (i = 0; i < rain1.length; i++) {//Displays the rainfalling.
      //rain1[i].move(); 
      rain1[i].display();
    }
  
    
}else{//If w is not 1 it will be a sunny day.
  g=150;
  b=250;
  fill(250,200,0);
  ellipse(0,0,200,200);
}}
function mousePressed(){ //When you click the mouse it changes w from 0 to 1 or 1 to 0.
  w++;
  if(w==2){
    w= w-2;
  }
}