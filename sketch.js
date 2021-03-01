
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 690);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(500,345,90,30);
	plane = new Plane(500,630,1000,120);
    stone = new Stone(400,245,60,60);
    rubber = new Rubber(900,450,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hammer.display();
  plane.display();
  rubber.display();
  stone.display();
  
  drawSprites();
 
}



