var fixedRect;
var movingRect;  

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 fixedRect.shapeColor = "black"
 movingRect = createSprite(100,100,50,50);
 movingRect.shapeColor = "black";
}

function draw() {
  background("blue");
  movingRect.x = mouseX;
  movingRect.y = mouseY; 
  
  if (movingRect.x-fixedRect.x<= movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<= movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2) {
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "white";
  } else {
    fixedRect.shapeColor = "black"
    movingRect.shapeColor = "black"
  }
  drawSprites();
}