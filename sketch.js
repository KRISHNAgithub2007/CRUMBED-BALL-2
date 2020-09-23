
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var ground;

var b1;
var b2;
var b3;

var paper,paperimg;
var dustbin,dustimg;

var engine, world;

function preload()
{
	dustimg=loadImage("images/dustbingreen.png");
	paperimg=loadImage("images/paper.png");
}

function setup() {
	createCanvas(1365, 652);


	var balloptions=
	{
		isStatic : false,
		restitution : 1,
		friction : 0.05,
		density : 1.2

	}

	var groptions=
	{
		isStatic: true,
		density : 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=Bodies.rectangle(682,614,1365,20,groptions);
	World.add(world,ground);

	ball= Bodies.rectangle(100,600,10,10,balloptions);
	World.add(world,ball);
	
	b1=Bodies.rectangle(900,563,20,100,groptions);
	World.add(world,b1);

	b2=Bodies.rectangle(1000,563,20,100,groptions);
	World.add(world,b2);

	b3=Bodies.rectangle(890,610,200,20,groptions);
	World.add(world,b3);

	 dustbin=createSprite(950,560,200,20);
	 dustbin.addImage("binimg",dustimg)
	 dustbin.scale=0.4;

	 paper=createSprite(ball.position.x,ball.position.y,20,20);
	 paper.addImage("paperimage",paperimg);
	 paper.scale=0.3;

	Engine.run(engine);
  
}


function draw() {
  
  background("yellow");
  
Engine.update(engine);

	ballf();


  rectMode(CENTER);

  fill("brown");
  rect(ground.position.x,ground.position.y+10,1365,20);

  paper.x=ball.position.x;
  paper.y=ball.position.y;

//console.log(ball.position.x);
  drawSprites();
 
}

 function ballf() {


  if(keyWentDown("space"))
  {
	  Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 6, y: -7});
  }

  
}






