
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var left;
var right;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine=Engine.create();
	world=engine.world;

	var ball_props={
		restitution: 0.8,
	
	}


	//Create the Bodies Here.
	ball=Bodies.circle(75,375,10,ball_props)
	World.add(world, ball)

	ground=new Ground(width/2,670,width,20);
	right = new Ground(600,600,20,120);
  left = new Ground(1100,600,20,120);
	
  
}


function draw() {
 Engine.update(engine);
rectMode(CENTER);
  background(0);

  ground.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,10,10);
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05});
	}
}

