//Create variables here
var database ;
var dog , dogImage,  happydog , happydogimg, foodS ,foodStock ;


function preload()

{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
dog = createSprite(250 ,250 , 50 , 50)
dog.addImage(dogImage)

database= firebase.database()
foodStock = database.ref("dogFood")
foodStock.on("value",readStock)


}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)) {
writeStock(foodStock)
dog.changeImage(happydogimg)

}





  drawSprites();
  //add styles here

text("PRESS UP ARROW KEY TO FEED ROBBY DOGFOOD" , 450 , 150)
fill("black")




  

}


var x = foodStock;

function readStock(data) {
foodS= data.val();



}

function writeStock(x){

if(x<=0){
x = 0
}
else{
x = x-1


}




database.ref('/').update({

food:x


})


}



