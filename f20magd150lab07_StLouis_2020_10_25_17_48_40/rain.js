class rain{
   constructor(x,y){ //Plug in own x and y cordinates.
   this.x=x;
   this.y=y;
  }
 
  move(){
    //this.y+=5;
  }
  display(){ 
    if(this.y<450){
      fill(0,0,200);
    ellipse(this.x,this.y,6,15);
    
    
    }
  }
}