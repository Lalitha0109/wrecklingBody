function setup() {
  createCanvas(1000,600);
  engine=Matter.Engine.create();
  world=engine.world;
  ground=Matter.Bodies.rectangle(500,575,1000,50,{isStatic:true});
  Matter.World.add(world,ground);

  box1=new Box(250,525);
  box2=new Box(250,425);
  box3=new Box(250,325);
  box4=new Box(250,225);

  box5=new Box(450,525);
  box6=new Box(450,425);
  box7=new Box(450,325);
  box8=new Box(450,225);

  ball=Matter.Bodies.circle(600,400,35);
  Matter.World.add(world,ball);

  var options={
    bodyA:ball,
    pointB:{x:600,y:100},
    stiffness:1
  }

  chain=Matter.Constraint.create(options);
  Matter.World.add(world,chain);


}

function draw() {
  background("black");
  Matter.Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,50); 
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  fill("yellow");
  ellipse(ball.position.x,ball.position.y,70,70);

  fill("white");
  strokeWeight(3);
  stroke("white")
  line(chain.bodyA.position.x,chain.bodyA.position.y,chain.pointB.x,chain.pointB.y);

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});

}
