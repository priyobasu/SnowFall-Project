
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var bg;
var snow=[]
function preload(){
bg=loadImage("snow1.jpg")

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  
  
}

function draw() {
  background(bg); 
  
  Engine.update(engine);

  if(frameCount%10===0){
    snow.push(new Snow(random(10,750), 10,100));
  
  }

 for (var j = 0; j < snow.length; j++) {
  
    snow[j].display();
  }
  

}