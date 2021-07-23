var ship 
var ship_Img
var sea
var sea_Img



function preload(){
  
  ship_img = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  sea_Img  = loadImage("sea.png")
  
}


function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200)
  sea.addImage("sea",sea_Img)
  ship = createSprite(200,200)
  ship.addAnimation("ship",ship_img)
  ship.scale = 0.2
  sea.scale=0.5
  sea.velocityX = -2
  

}
function draw(){

background("blue")
if(sea.x<0){
 sea.x = sea.width/8
 
}
drawSprites();


}