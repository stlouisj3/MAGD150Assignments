/* Sources
Joker Font-https://www.fontspace.com/gothic-joker-font-f41415
Halloween Font-https://www.fontspace.com/category/halloween
Harley Quinn Picture-https://www.freepngimg.com/thumb/harley_quinn/7-2-harley-quinn-png-thumb.png
Joker Picture-https://www.freepngimg.com/thumb/joker/21174-8-batman-joker-file-thumb.png
Light2- https://i.pinimg.com/originals/41/cc/fe/41ccfe1c0c6f6e1644827f510af9dbf1.png
Light1-https://freepikpsd.com/wp-content/uploads/2019/10/hanging-bulb-png-4-Transparent-Images-228x171.png*/
var pdf;
function preload(){
  joker= loadImage("joker1.png");
  light = loadImage("light1.png");
  shadow = loadImage("light2.png")
  h= loadImage("harley.png");
  t= loadFont("SomethingStrange-vjYD.ttf");
  j= loadFont("GothicJoker-gxxGP.ttf");
  title = loadStrings("title.txt")
}
function setup() {
  createCanvas(400, 550);
  on = 0; 
  y= 700;
  up=0;
  pdf= createPDF();
  pdf.beginRecord();
}

function draw() {
  background(0);
  on++; 
  if((on>5 && on<30) || on>40 &&on<50){//Flashes the joker on 
  push();
  tint(250,0,0);
  image(shadow,-100,0);
  image(joker,100,300);
  pop();}
  if(on>55 && on<65){ //Flashes Harley Quinn Silouet
    push();
  h.filter(POSTERIZE);
  tint(250,0,0);
  image(shadow,-100,0);
  image(h,100,300);
  pop();}
  if(on>100){//Resets the light count.
    on=0;
  }
  image(light,90,-50);
  fill(150);
  if(on%10){//Makes the Joker title flicker like a dying lightbulb.
    textFont(j);
  fill(250);
  textSize(100);
  textAlign(CENTER);
  text("The Joker",200,75);
  }
  textFont(t);
  textAlign(LEFT);
  fill(250,0,0);
  textSize(50);
  text(title,35,y);
  if(up==1&&y>540){//{Makes sure the halloween title stops at the bottom and not continue to rise. 
    y--;
    
  }
  if(keyIsPressed){//Allows Harley halloween to be shown.
    up=1;
  }
  }
function mousePressed(){ //Saves the poster as a pdf.
  pdf.save();
}
