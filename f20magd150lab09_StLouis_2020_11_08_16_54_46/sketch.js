function preload(){
  uke = loadImage('ukulele-hi.png');
  jelle=loadFont('Jellee-Roman.ttf');
  soundFormats('mp3', 'm4a');
  mySound = loadSound('Somewhere over the rainbow.m4a');//This is my sound I recorded this on my Iphone 8.
  
}
function setup() {
  createCanvas(700, 550);
  mirror = createCapture(VIDEO);//Uses the camera to record.
  mirror.hide();
  mySound.rate(1.5);//Speeds up soud slightly.
  button = createButton("Play");
  button.position(250,507);
  button.mousePressed(song);
  
}

function draw(){
  background(255,255,153);
  fill(150,65,20);
  
  rect(15,15,320,420);
  image(mirror, 25, 25, 300,400);//Allows camera to be used so the video can be percieved as a mirror.
  
  fill(255,255,0);//Creation of mirror.
  rect(200,50,100,100);
  fill(0);
  textSize(20);
  textFont(jelle);//Font used for sticky note.
  textAlign(LEFT);
  text("-Pick up",205,75);
  text("the kids",205,105);
  textFont();
  text("Mirror Play Me a Song.",15,525);
  image(uke,450,-20);
}

function song() {
 if(mySound.isPlaying()){//Allows button to switch from play to pause and plays and pauses music.
    mySound.pause();
   button.html("Play");
   
 }else{
  mySound.play();
   button.html("Pause")
 }
}
