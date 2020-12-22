//Create variables here
var dog,happyDog,dogImage
var database
var foodStock
function preload()
{ var dogImage = loadAnimation("sprites/dogImg.png")
  var happyDog = loadAnimation("sprites/dogImg1.png")
	//load images here
}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  dog= createSprite(400,300,10,10);
  dog.addImage(dog)
}


function draw() {  

  drawSprites();
  //add styles here
  if(keyDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
  }
}

function readStock(data){
  foodS=data.val()
}


function writeStock(data){
 database.ref('/').update({
   Food:x
 })
}