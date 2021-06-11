

var boy,girl;
var bg2;
var boyImg,girlImg;
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8;
var snow9,snow10,snow11,snow12,snow13,snow14;
var snow15,snow16,snow17,snow18,snow19,snow20;
var snow21,snow22,snow23,snow24,snow25,snow26;
var snow27,snow28,snow29,snow30;

var backgroundImg;
var snowImg;

function preload(){
  

bg2=loadImage("snow2.jpg");

boyImg=loadImage("  IMG_7347.png");
girlImg=loadImage("IMG_7348.png");
snowImg=loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,400);
  

  boy=createSprite(400, 200, 50, 50);
  boy.addImage(boyImg);
  boy.scale=0.5;
  
  
  girl=createSprite(500,200,50,50);
  girl.addImage(girlImg);
  girl.scale=0.5;
  
  snow1=createSprite(200,-50,50,50);
  snow1.addImage(snowImg);
  snow1.scale=0.1;
  snow1.velocityX=0;
  snow1.velocityY=2;

  snow2=createSprite(250,-50,50,50);
  snow2.addImage(snowImg);
  snow2.scale=0.1;
  snow2.velocityX=0;
  snow2.velocityY=3;

  snow3=createSprite(300,-50,50,50);
  snow3.addImage(snowImg);
  snow3.scale=0.1;
  snow3.velocityX=0;
  snow3.velocityY=4;

  snow4=createSprite(350,-50,50,50);
  snow4.addImage(snowImg);
  snow4.scale=0.1;
  snow4.velocityX=0;
  snow4.velocityY=5;

  snow5=createSprite(400,-50,50,50);
  snow5.addImage(snowImg);
  snow5.scale=0.1;
  snow5.velocityX=0;
  snow5.velocityY=6;

  snow6=createSprite(450,-50,50,50);
  snow6.addImage(snowImg);
  snow6.scale=0.1;
  snow6.velocityX=0;
  snow6.velocityY=24;

	snow7=createSprite(150,-50,50,50);
  snow7.addImage(snowImg);
  snow7.scale=0.1;
  snow7.velocityX=0;
  snow7.velocityY=5;

  snow8=createSprite(100,-50,50,50);
  snow8.addImage(snowImg);
  snow8.scale=0.1;
  snow8.velocityX=0;
  snow8.velocityY=2;

  snow9=createSprite(50,-50,50,50);
  snow9.addImage(snowImg);
  snow9.scale=0.1;
  snow9.velocityX=0;
  snow9.velocityY=3;

  snow10=createSprite(500,-50,50,50);
  snow10.addImage(snowImg);
  snow10.scale=0.1;
  snow10.velocityX=0;
  snow10.velocityY=1;

  snow11=createSprite(550,-50,50,50);
  snow11.addImage(snowImg);
  snow11.scale=0.1;
  snow11.velocityX=0;
  snow11.velocityY=2;

  snow12=createSprite(600,-50,50,50);
  snow12.addImage(snowImg);
  snow12.scale=0.1;
  snow12.velocityX=0;
  snow12.velocityY=3;

  snow13=createSprite(650,-50,50,50);
  snow13.addImage(snowImg);
  snow13.scale=0.1;
  snow13.velocityX=0;
  snow13.velocityY=5;

  snow14=createSprite(700,-50,50,50);
  snow14.addImage(snowImg);
  snow14.scale=0.1;
  snow14.velocityX=0;
  snow14.velocityY=3;

  snow15=createSprite(750,-50,50,50);
  snow15.addImage(snowImg);
  snow15.scale=0.1;
  snow15.velocityX=0;
  snow15.velocityY=1;

  snow16=createSprite(200,-50,50,50);
  snow16.addImage(snowImg);
  snow16.scale=0.1;
  
  snow17=createSprite(250,-50,50,50);
  snow17.addImage(snowImg);
  snow17.scale=0.1;
  

  snow18=createSprite(300,-50,50,50);
  snow18.addImage(snowImg);
  snow18.scale=0.1;
  

  snow19=createSprite(350,-50,50,50);
  snow19.addImage(snowImg);
  snow19.scale=0.1;
  

  snow20=createSprite(400,-50,50,50);
  snow20.addImage(snowImg);
  snow20.scale=0.1;

    
  snow21=createSprite(450,-50,50,50);
  snow21.addImage(snowImg);
  snow21.scale=0.1;
  
  snow22=createSprite(150,-50,50,50);
  snow22.addImage(snowImg);
  snow22.scale=0.1;
 

  snow23=createSprite(100,-50,50,50);
  snow23.addImage(snowImg);
  snow23.scale=0.1;
  

  snow24=createSprite(50,-50,50,50);
  snow24.addImage(snowImg);
  snow24.scale=0.1;
 

  snow25=createSprite(500,-50,50,50);
  snow25.addImage(snowImg);
  snow25.scale=0.1;
   
  snow26=createSprite(550,-50,50,50);
  snow26.addImage(snowImg);
  snow26.scale=0.1;
   
  snow27=createSprite(600,-50,50,50);
  snow27.addImage(snowImg);
  snow27.scale=0.1;
   
  snow28=createSprite(650,-50,50,50);
  snow28.addImage(snowImg);
  snow28.scale=0.1;
   
  snow29=createSprite(700,-50,50,50);
  snow29.addImage(snowImg);
  snow29.scale=0.1;
   
  snow30=createSprite(750,-50,50,50);
  snow30.addImage(snowImg);
  snow30.scale=0.1;
   
  
  
}

  

function draw() {
  
  background(bg2);

  
 

  keyPressed(); 
  drawSprites();
 
}
function keyPressed(){
  if(keyIsDown(LEFT_ARROW)){
    boy.velocityX=-2;
    boy.velocityY=0;

    snow16.velocityX=0;
  snow16.velocityY=1;

snow17.velocityX=0;
  snow17.velocityY=3;

snow18.velocityX=0;
  snow18.velocityY=5;

snow19.velocityX=0;
  snow19.velocityY=3;

snow20.velocityX=0;
  snow20.velocityY=2;

 snow22.velocityX=0;
  snow22.velocityY=5;

snow23.velocityX=0;
  snow23.velocityY=2;

 snow24.velocityX=0;
  snow24.velocityY=3;

snow25.velocityX=0;
  snow25.velocityY=1;

snow21.velocityX=0;
  snow21.velocityY=2;

  snow26.velocityX=0;
  snow26.velocityY=1;

  snow27.velocityX=0;
  snow27.velocityY=2;

  snow28.velocityX=0;
  snow28.velocityY=4;

  snow29.velocityX=0;
  snow29.velocityY=2;

  snow30.velocityX=0;
  snow30.velocityY=4;

  snow16.x=50;
  snow16.y=-50;  

  snow17.x=100;
  snow17.y=-50; 

  snow18.x=150;
  snow18.y=-50;
  
  snow19.x=200;
  snow19.y=-50; 

  snow20.x=250;
  snow20.y=-50; 

  snow21.x=300;
  snow21.y=-50; 

  snow22.x=350;
  snow22.y=-50; 

  snow23.x=400;
  snow23.y=-50;
  
  snow24.x=450;
  snow24.y=0;
  
  snow25.x=500;
  snow25.y=-50; 

  snow26.x=550;
  snow26.y=-50; 

  snow27.x=600;
  snow27.y=-50; 

  snow28.x=650;
  snow28.y=-50; 

  snow29.x=700;
  snow29.y=-50; 

  snow30.x=750;
  snow30.y=-50; 

   }

   if(keyIsDown(RIGHT_ARROW)){
    boy.velocityX=2;
    boy.velocityY=0;

  snow1.x=50;
  snow1.y=-50;  

  snow2.x=100;
  snow2.y=-50; 

  snow3.x=150;
  snow3.y=-50;
  
  snow4.x=200;
  snow4.y=-50; 

  snow5.x=250;
  snow5.y=-50; 

  snow6.x=300;
  snow6.y=-50; 

  snow7.x=350;
  snow7.y=-50; 

  snow8.x=400;
  snow8.y=-50;
  
  snow9.x=450;
  snow9.y=-50;
  
  snow10.x=500;
  snow10.y=-50; 

  snow11.x=550;
  snow11.y=-50; 

  snow12.x=600;
  snow12.y=-50; 

  snow13.x=650;
  snow13.y=-50; 

  snow14.x=700;
  snow14.y=-50; 

  snow15.x=750;
  snow15.y=-50; 
   
   }

   if(keyIsDown(UP_ARROW)){
    girl.velocityX=2;
    girl.velocityY=0;
   } 

   if(keyIsDown(DOWN_ARROW)){
    girl.velocityX=-2;
    girl.velocityY=0;
   }

   
}





  
  

  




