/// <reference path="./libraries/P5JS_PROJECT_TEMPLATE/TSDef/p5.global-mode.d.ts"/>
let environment;
let lengthSlider;
let numberOfRaysSlider;
let crosshair;


function setup() {
  width = 800
  height = 800

  c  = createCanvas(width, height);
  player = new Player(createVector(width/2, height/2), p5.Vector.random2D(), createVector(0,0),4, c)
  environment= new Environment(c)
  crosshair = new Ray()
  environment.objects.push(player)
  for(let i = 0; i<=4; i++){
    let asteroid = new Asteroid(p5.Vector.random2D(), p5.Vector.random2D(),c)
    environment.objects.push(asteroid)
    environment.asteroids.push(asteroid)
  }
  console.log(environment)
  angleMode(DEGREES)
  rectMode(CENTER)
  lengthSlider = createSlider(15,100,1)
  numberOfRaysSlider = createSlider(3,15,1)
  noCursor()
  angleMode(DEGREES)
}

function draw() {
  background(25);
  push()
  crosshair.draw(lengthSlider.value(), numberOfRaysSlider.value())
  pop()
  environment.checkCollisions()
  environment.objects.forEach(element => {
    push()
    element.draw()
    element.move()
    pop()
  });

  
}

function mouseClicked(){
  console.log("clicked")
  player.fire(environment)
}


