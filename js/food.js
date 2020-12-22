class Food{

   constructor(){

   }
    
   

   display(){
   var x=80 
   var y=100
   
 imageMode(CENTER)
image(this.image,720,220,70,70)

if (this.foodStock=0){
    for(var i=0;i <globalThis.foodStock; i++){
    if(i%10==0){
        x=80
        y=y+50
    }

    }
}

   
}
time(){
    currentTime=hour();
    if(currentTime==(lastFed+1)){
        update('playing')
        foodObj.garden();
    }
    else if(currentTime==(lastFed+2)){
        update('sleeping')
        foodObj.bedroom();
    }
    else if(currentTime==(lastFed+2) && currentTime<=(lastFed+4)){
        update('bathing')
        foodObj.bedroom();
        
    }
    else {
        update('bathing')
        foodObj.bedroom();
    }
   }
}    
 
