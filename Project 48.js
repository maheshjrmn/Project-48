var back, basketImg, basket;
var candyGrp, candyGrp2, candyGrp3;
var score;

function preload(){
  back= loadImage("Images/Background.png");
  basketImg= loadImage("Images/Basket 2.png");
  CandyImg= loadImage("Images/Candy6.png");
  CandyImg2= loadImage("Images/Candy 7.png");
  CandyImg3= loadImage("Images/Candy 8.png");

}
  

function setup() {
  createCanvas(1200, 600);

basket= createSprite(500,500,100,100);
basket.addImage(basketImg);
basket.scale= 0.7;
basket.debug= true;
basket.setCollider("circle",-20,30,90);

//creating groups

candyGrp = new Group();
candyGrp2 = new Group();
candyGrp3 = new Group();
score = 0;

}

function draw() {
  background(back);

  if(keyDown("left_arrow")){
    basket.x = basket.x - 6;
  }

  if(keyDown("right_arrow")){
    basket.x = basket.x + 6;
  }

  if(candyGrp.isTouching(basket)){
    candyGrp.destroyEach();
    score = score+1;
  }

  if(candyGrp2.isTouching(basket)){
    candyGrp2.destroyEach();
    score = score+1;
  }

  if(candyGrp3.isTouching(basket)){
    candyGrp3.destroyEach();
    score = score+1;
  }

  if(score==2){
    textSize(60)
  text("Congratulations",400,300);
  }

 spawnCandy();
 spawnCandy2();
 spawnCandy3();

  drawSprites();
  textSize(20)
  text("Score: "+ score, 500,50);
  

  

}

function spawnCandy() {

  if(frameCount % 150 ==0 ){
  var Candy= createSprite(50,10);
  Candy.addImage(CandyImg);
  Candy.scale= 0.2;
  Candy.velocityY= 2;
  Candy.x = Math.round(random(20,1000));
  Candy.debug= true;
  Candy.setCollider("circle",0,0,100);

  candyGrp.add(Candy);

  }

}

function spawnCandy2() {

  if(frameCount % 180 ==0 ){
  var Candy2= createSprite(50,10);
  Candy2.addImage(CandyImg2);
  Candy2.scale= 0.2;
  Candy2.velocityY= 2;
  Candy2.x = Math.round(random(20,1000));

  candyGrp2.add(Candy2);

  }

}

function spawnCandy3() {

  if(frameCount % 210 ==0 ){
  var Candy3= createSprite(50,10);
  Candy3.addImage(CandyImg3);
  Candy3.scale= 0.2;
  Candy3.velocityY= 2;
  Candy3.x = Math.round(random(20,1000));

  candyGrp3.add(Candy3);

  }

}





