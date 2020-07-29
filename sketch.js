var fix_rect,moving_rect;
function setup() {
  createCanvas(1200,800);
  fix_rect=createSprite(400, 200, 50, 80);
moving_rect=createSprite(400, 200, 80, 50);
moving_rect.shapeColor="green";
fix_rect.shapeColor="green";
}
function draw() {
  background(255,255,255); 
  moving_rect.x=World.mouseX; 
  moving_rect.y=World.mouseY;

  if(moving_rect.x-fix_rect.x<moving_rect.width/2+fix_rect.width/2 
    &&fix_rect.x-moving_rect.x<moving_rect.width/2+fix_rect.width/2
    && moving_rect.y-fix_rect.y<moving_rect.height/2+fix_rect.height/2 
    &&fix_rect.y-moving_rect.y<moving_rect.height/2+fix_rect.height/2 ) {
    moving_rect.shapeColor="red";
    fix_rect.shapeColor="red";
  }
  else{
    moving_rect.shapeColor="green";
    fix_rect.shapeColor="green";
  }

  drawSprites();
}