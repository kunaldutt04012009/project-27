
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var roof_options={
		isStatic:true
	  }
	  
	  roof=Bodies.rectangle(260,100,600,20,roof_options);
	  World.add(world,roof);

	  

	Bobdiameter=40;

	bob1=new Bob(100,350,40);
	bob2=new Bob(180,350,40);
	bob3=new Bob(260,350,40);
	bob4=new Bob(340,350,40);
	bob5=new Bob(420,350,40);
	rope1=new Rope(bob1.body,roof,-Bobdiameter*4,0);
	rope2=new Rope(bob2.body,roof,-Bobdiameter*2,0);
	rope3=new Rope(bob3.body,roof,-Bobdiameter*0,0);
	rope4=new Rope(bob4.body,roof,Bobdiameter*2,0);
	rope5=new Rope(bob5.body,roof,Bobdiameter*4,0);

	Engine.run(engine);
  
}


function draw() {
  background("yellow");
  rectMode(CENTER); 
 rect(roof.position.x,roof.position.y,500,30);

  
  drawSprites();
  bob1.display();
  bob3.display();
  bob2.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-150})
	}

}

