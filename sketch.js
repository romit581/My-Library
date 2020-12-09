var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite (100, 50, 60, 60);
  box1.shapeColor = "lightgreen";

  box2= createSprite (100,300,80,80);
  box2.shapeColor = "cyan";

  box1.velocityY = 4;
  box2.velocityY = -4;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}


function draw() {
  background(0,0,0);  

  bounceoff(movingRect,fixedRect);
  bounceoff(box1,box2)

  drawSprites();

}


