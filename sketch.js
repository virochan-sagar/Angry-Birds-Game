const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var box1,box2,box3,box4,box5,ground1,pig1,pig2,log1,log2,log3,log4,bird1,back;
function preload (){
back=loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1200,400);

    engine=Engine.create();
    world=engine.world;

    ground1=new Ground(600,395,1200,10);

    box1=new Box(700,385,70,70);
    box2=new Box(920,385,70,70);    
    pig1=new Pig(810,385);
    log1=new Log(810,300,300,PI/2);

    box3=new Box(700,250,70,70);
    box4=new Box(920,250,70,70);    
    pig2=new Pig(810,250);
    log2=new Log(810,220,300,PI/2);

    log3=new Log(760,120,150,PI/7);
    log4=new Log(860,120,150,-PI/7);
    box5=new Box(810,120,70,70);
    
    bird1=new bird(50,50);
}
    

function draw(){
    background(back);
    Engine.update(engine);

ground1.display();

 box1.display();
 box2.display();
 pig1.display();
 log1.display();

 log2.display();
 box3.display();
 box4.display();
 pig2.display();

 log3.display();
 box5.display();
 log4.display();

 bird1.display();
}