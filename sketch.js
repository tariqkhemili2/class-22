const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options={
    isStatic:true
  }
  var ball_options={
    restitution:0.5
  }
  ground = Bodies.rectangle(400,380,400,20,ground_options);
  ball = Bodies.circle(400,200,40,ball_options);
  World.add(world,ground);
  World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  console.log(ball);
}