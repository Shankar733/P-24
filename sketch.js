 var paperObject,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	ground.shapeColor=color(255,0,0);

	line1=createSprite(350,645,100,20);
		line1.shapeColor=color(255,0,0);
	line2=createSprite(300,605,20,100);
		line2.shapeColor=color(255,0,0);
	line3=createSprite(400,605,20,100);
		line3.shapeColor=color(255,0,0);

		paperObject=new Paper(100,600,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:20,y:-85});
	}

}

