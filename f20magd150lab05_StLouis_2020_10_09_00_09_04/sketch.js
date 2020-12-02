x1  = 375; //X coordinate for  channel buttons
y1 = 200; // Y coordinate for up button
y2 = 240; //Y coordinate for down button
w  = 75; //Width for rectangle
h  = 25; //height for rectangle
r = 60; //radius for power button
channel = 0;
power = 1;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  d = dist(410,350,mouseX,mouseY);
  background(220);
  fill(100);
  stroke(0);
  strokeWeight(2);
  quad(75,500,75,450,150,450,150,500); //Stand
  quad(425,500,425,450,350,450,350,500); //Stand 
  line(250,150,175,25);//Attena
  line(250,150,325,25); //Attena
  ellipse(250,150,100,100);//Atena thing
  fill(160,82,45);
  quad(25,450,25,150,475,150,475,450); //Brown
  fill(0);
  quad(50,425,50,175,350,175,350,425); //Screen
  rect(x1,y1,w,h); //Up button
  rect(x1,y2,w,h); //Down button
  fill(250,0,0);
  ellipse(410,350,r,r); //Power button
  textSize(20);
  fill(250);
  text("UP",395,220); 
  text("DOWN",380,260);
  fill(0);
  textSize(13);
  strokeWeight(0);
  text("POWER",385,355);
  if(power==-1){//Power and channels
  switch(channel){
   case(0): //Dragon Ball 
  fill(0,100,250);
  noStroke();
  quad(50,425,50,175,350,175,350,425);
  fill(250,150,0);
  strokeWeight(5);
  stroke(0);
  ellipse(200,300,125,125);
  fill(250,75,0);
  noStroke();
  beginShape();
  vertex(200,250);
  vertex(185,280);
  vertex(155,280);
  vertex(180,300);
  vertex(165,335);
  vertex(200,315);
  vertex(235,335);
  vertex(220,300);
  vertex(245,280);
  vertex(215,280);
  endShape(CLOSE);  
  break;
  case(1): //Deadpool
      fill(0);
  noStroke();
  quad(50,425,50,175,350,175,350,425);
  fill(250,0,0);
  ellipse(200,300,125,125);
  fill(0);
  ellipse(200,300,105,105);
  fill(250,0,0);
  rect(193,245,15,115);
  fill(250);
  triangle(185,300,155,275,170,300);
  triangle(215,300,245,275,230,300);
  bezier(185,300,180,305,175,305,170,300);
  bezier(215,300,220,305,225,305,230,300);
  break;
  case(2): //Static
      fill(250);
  noStroke(1);
  px1 = 50;
  px2 = 175;
  py1 = 350;
  py2 = 425;
  pointX = random(50,100);
  pointY = random(175,250);
  pointX1 = random(50,100);
  pointY1 = random(250,425);
  pointX2 = random(100,150);
  pointY2 = random(175,250);
  pointX3 = random(100,150);
  pointY3 = random(250,425);
  pointX4 = random(150,200);
  pointY4 = random(175,250);
  pointX5 = random(150,200);
  pointY5 = random(250,425);
  pointX6 = random(200,250);
  pointY6 = random(175,250);
  pointX7 = random(200,250);
  pointY7 = random(250,425);
  pointX8 = random(250,300);
  pointY8 = random(175,250);
  pointX9 = random(250,300);
  pointY9 = random(250,425);
  pointX10 = random(300,350);
  pointY10 = random(175,250);
  pointX11 = random(250,350);
  pointY11 = random(250,425);
  quad(50,425,50,175,350,175,350,425);
  stroke(0);
  strokeWeight(5);
  point(pointX,pointY);
  point(pointX1,pointY1);
  point(pointX2,pointY2);
  point(pointX3,pointY3);
  point(pointX4,pointY4);
  point(pointX5,pointY5);
  point(pointX6,pointY6);
  point(pointX7,pointY7);
  point(pointX8,pointY8);
  point(pointX9,pointY9);
  point(pointX10,pointY10);
  point(pointX11,pointY11); 
  break;
  case(3): //Boy Meets World
      fill(0,150,0,150);
  noStroke();
  quad(50,425,50,175,350,175,350,425); //Screen
  stroke(250,0,0,150);
  strokeWeight(5);
  fill(250,175);
  rect(110,240,175,125);
  noStroke();
  fill(245,245,139);
  ellipse(197,280,15,20);
  fill(139,195,245);
  ellipse(180,320,15,20);
  fill(0,0,155,150);
  textSize(30);
  stroke(0,0,155,150);
  strokeWeight(2);
  text("BOY",165,290);
  text("WORLD",140,330);
  textSize(15);
  strokeWeight(1);
  text("meets",175,305);
    
  break;
  case(4): //Flash
     fill(250,0,0);
  noStroke();
  quad(50,425,50,175,350,175,350,425); //Screen
  fill(250);
  stroke(0);
  strokeWeight(5);
  ellipse(200,300,125,125);
  fill(250,250,0);
  beginShape();
  vertex(260,200);
  vertex(180,280);
  vertex(190,280);
  vertex(160,325);
  vertex(170,325);
  vertex(140,385);
  vertex(230,300);
  vertex(220,300);
  vertex(240,270);
  vertex(230,270);
  endShape(CLOSE); 
  break;
} }
  if(channel==5){
    channel = 0
  }
  if(channel==-1){
    channel = 4
  }
}
function mousePressed(){
  if(d<60){//Power Button
      power= power*-1;
      }
  if(power==-1){//Power must be on to swtich channels.
  if(mouseX>x1 && mouseX<x1+w && mouseY>y1 && mouseY<y1+h){//Up button
      channel++;
      print("Channel Up");
    }
  if(mouseX>x1 && mouseX<x1+w && mouseY>y2 && mouseY<y2+h){//Down Button
      channel--;
      print("Channel Down");
    }}
    }