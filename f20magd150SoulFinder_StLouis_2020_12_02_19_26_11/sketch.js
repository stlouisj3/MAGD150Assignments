function preload(){ //Loads in all sounds and images, all were created by me except for the font which is free for commercial use. 
  anim = loadAnimation("ghostSprite1.png","ghostSprite2.png","ghostSprite3.png","ghostSprite4.png");
  hey = createAudio("hey.mp3");
  over=createAudio("overHere.mp3");
  im=createAudio("imHere.mp3");
  heart = loadImage("heartLife.png");
  life = loadImage("lifeSprite.png");
  font = loadFont("setbackt.ttf");
}
function setup() {
  createCanvas(600,600); //Varibale set up for sprites
  x1=random(0,600);
  y1=random(0,600);
  x2 = 150;//Start button
  y2 = 235;
  w = 300;
  h = 100;
  
  start = 0;
  
  //Set up the walls position and colors
  ghost= createSprite(5,20);//Sprite for the ghost
  ghost.addAnimation("default",anim);
  ghost.position.x=300;
  ghost.position.y=550;
  goal=createSprite(x1,y1,50,50);//Sprite for the area you have to go to.
  goal.shapeColor = color(220);
  //All the walls
  wall=createSprite(0,0,10,2000);
  wall.shapeColor = color(150);
  wall1=createSprite(600,0,10,2000);
  wall1.shapeColor = color(150);
  wall2=createSprite(0,0,2000,10);
  wall2.shapeColor = color(150);
  wall3=createSprite(0,600,2000,10);
  wall3.shapeColor = color(150);
  wall4=createSprite(300,500,500,10);
  wall4.shapeColor = color(150);
  wall5=createSprite(55,300,10,400);
  wall5.shapeColor = color(150);
  wall6=createSprite(275,105,300,10);
  wall6.shapeColor = color(150);
  wall7=createSprite(425,55,10,300);
  wall7.shapeColor = color(150);
  wall8=createSprite(545,175,10,450);
  wall8.shapeColor = color(150);
  wall9=createSprite(275,390,300,10);
  wall9.shapeColor = color(150);
  wall10=createSprite(485,250,10,300);
  wall10.shapeColor = color(150);
  wall11=createSprite(275,200,430,10);
  wall11.shapeColor = color(150);
  wall12=createSprite(275,300,300,10);
  wall12.shapeColor = color(150);
  wall13=createSprite(175,350,10,90);
  wall13.shapeColor = color(150);
  wall14=createSprite(375,250,10,100);
  wall14.shapeColor = color(150);
  //Creates the lives shown
  heart1=createSprite(575,575);
  heart1.addImage(heart);
  heart2=createSprite(525,575);
  heart2.addImage(heart);
  heart3=createSprite(475,575);
  heart3.addImage(heart);
  heart4=createSprite(425,575);
  heart4.addImage(heart);
  heart5=createSprite(375,575);
  heart5.addImage(heart);
  
  //Sets up the sprite change when you win
  win = createSprite(200,200);
  win.addImage(life);
  win.position.x=x1;
  win.position.y = y1;
  //Sets up basic data for the game
  textFont(font);
  lives = 5;
  time = 240;
  timer=0;
  game = 0;
}
//drawSprite(wall); 
//ghost.collide(wall);
  //set up for wall
  

  

function draw() {
  drawSprite(goal);
  background(0);
  fill(250);
  textSize(50);
  
  //x3 = ghost.position.x;
  //y3 = ghost.position.y;
  
  
  //Set up for all the wall restrictions.
  drawSprite(ghost);
  drawSprite(wall);
  ghost.collide(wall);
  drawSprite(wall1);
  ghost.collide(wall1);
  win.collide(wall1);
  drawSprite(wall2);
  ghost.collide(wall2);
  win.collide(wall2);
  drawSprite(wall3);
  ghost.collide(wall3);
  win.collide(wall3);
  drawSprite(wall4);
  ghost.collide(wall4);
  win.collide(wall4);
  drawSprite(wall5);
  ghost.collide(wall5);
  win.collide(wall5);
  drawSprite(wall6);
  ghost.collide(wall6);
  win.collide(wall6);
  drawSprite(wall7);
  ghost.collide(wall7);
  win.collide(wall7);
  drawSprite(wall8);
  ghost.collide(wall8);
  win.collide(wall8);
  drawSprite(wall9);
  ghost.collide(wall9);
  win.collide(wall9);
  drawSprite(wall10);
  ghost.collide(wall10);
  win.collide(wall10);
  drawSprite(wall11);
  ghost.collide(wall11);
  win.collide(wall11);
  drawSprite(wall12);
  ghost.collide(wall12);
  win.collide(wall12);
  drawSprite(wall13);
  ghost.collide(wall13);
  win.collide(wall13);
  drawSprite(wall14);
  ghost.collide(wall14);
  win.collide(wall14);
  
  
  
  if(start==1){
  //Ghost Movement and distance set up
  x2=ghost.position.x;
  y2=ghost.position.y;
  d = int(dist(x1, y1, x2, y2));
  ghost.setSpeed(0, 0);
  win.setSpeed(0, 0);
  
  
  /*if(d>50){//Allow distance to be shown. 
  fill(250);
  textSize(50);
  text(d,500,50); //For finding goal easier
  }*/
  drawSprite(ghost);
  timer=1+timer; //Voice system, plays a sound based on the time and the distance the player is relative to the goal.
  if(d<50){//Volume Control
    hey.stop();
    over.stop();
    if(timer==420){
    im.play();
    im.volume(0.4);
    }
  }
  if(d>50 && d<100){
    hey.volume(0.8);
  over.volume(0.8);
  }
  if(d>100 && d<250){
    hey.volume(0.6);
  over.volume(0.6);
  }
  if(d>250 && d<400){
    hey.volume(0.4);
  over.volume(0.4);
  }
  if(d>500 ){
    hey.volume(0.2);
  over.volume(0.2);
  }
  
  if(timer==1){//Timer allowing soundefeffects to constantly play.
    hey.play();
  }
  if(timer==250){
    over.play();
  }
  if(timer>500){
    timer=timer-510;
  }
  
  
if (keyIsPressed){//Programming for controls.
  if(keyCode == UP_ARROW ){
    ghost.setSpeed(2, 270);
    //win.setSpeed(2, 270);
  }
  else if(keyCode == DOWN_ARROW ){
     ghost.setSpeed(2, 90);
     //win.setSpeed(2, 90);
  }
  else if(keyCode == RIGHT_ARROW ){
     ghost.setSpeed(2, 0);
     //win.setSpeed(2, 0);
  }
  else if(keyCode == LEFT_ARROW ){
   ghost.setSpeed(2, 180);
   //win.setSpeed(2, 180);
  }
  
  }
 //Lives system allowing you to see how many lives you have left.
  if(lives==5){
  drawSprite(heart1);
  drawSprite(heart2);
  drawSprite(heart3);
  drawSprite(heart4);
  drawSprite(heart5);
  }else if(lives==4){
    drawSprite(heart1);
    drawSprite(heart2);
    drawSprite(heart3);
    drawSprite(heart4);
  }else if(lives==3){
    drawSprite(heart1);
    drawSprite(heart2);
    drawSprite(heart3);
    
  }
  else if(lives==2){
    drawSprite(heart1);
    drawSprite(heart2);
  }else if(lives==1){
    drawSprite(heart1);
  } 
  if(game==1){//Win and Loose screens
   drawSprite(win);
    push();
    fill(255);
    text("You Win",200,300);
    pop();
  }else if(lives==0 || time == 0){
    noLoop();
    fill(0);
    rect(150,235,300,100);
    fill(255,0,0);
    text("Gameover",200,300);
  }
  
  
  push();//Game Clock for 5 Minutes.
  fill(255);
  text(time, 500,50);
  if (frameCount % 60 == 0){
    time--;
  pop();}
    
  
} else {//Title screen
  fill(150);
    rect(x2,y2,w,h);
    fill(255);
    text("Play",250,300);
    fill(250,0,0);
  textSize(75);
    text("Soul Finder",85,150);
}}
function keyPressed(){//Winning scenario.
  if(keyCode == ENTER){
  if(ghost.overlap(goal)){
    //fill(0);
    //rect(50,50,100,100);
    game++;
   
    
    ghost.remove();
    noLoop(); 
    
    
    
    
  }else{
    lives--;
  }
  }

}
function mousePressed(){ //Allows for player to start the game
  if(start ==0){
    if(mouseX>x2 && mouseX<x2+w && mouseY>y2 && mouseY<y2+h){
      start++;
    }
  }
}