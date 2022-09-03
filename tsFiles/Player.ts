
class Player extends GameObject {
    pos:p5.Vector;
    vel:p5.Vector;
    acc:p5.Vector;
    velLimit: number;
    facing:p5.Vector;
    coordinates:{
        r0:p5.Vector,
        r120:p5.Vector,
        r240:p5.Vector
    }
    canvas:any;
    constructor(pos:p5.Vector,vel:p5.Vector,acc:p5.Vector,velLimit: number, canvas){
        super(pos,vel);
        this.acc = acc
        this.velLimit = velLimit
        this.canvas = canvas
        this.coordinates = {
            r0:createVector(0,0),
            r120:createVector(0,0),
            r240:createVector(0,0)
        }
        
    }

    move(){
        stroke(0,0,255)
        let accellVector = createVector(0,0)
        if (keyIsDown(65)){
          accellVector.add(createVector(-1,0))
        }  
         if (keyIsDown(68)){
          accellVector.add(createVector(1,0))
        }  
         if (keyIsDown(83)){
          accellVector.add(createVector(0,1))
        }  
         if (keyIsDown(87)){
          accellVector.add(createVector(0,-1))
        }
        if (keyIsDown(66)){
          accellVector.add(createVector(-this.vel.x, -this.vel.y))
        }
        this.accellerate(accellVector)
        this.vel.add(this.acc)
        this.vel.limit(this.velLimit)
        this.pos.add(this.vel)
    }
    accellerate(direction){
        this.acc = p5.Vector.sub(direction.add(this.pos),this.pos)
        //this.acc.setMag(1)
        this.acc.mult(.2)
    }
    draw(){
        this.checkPositioningInCanvas()
        this.getCoords()
        triangle(this.coordinates.r0.x,this.coordinates.r0.y ,this.coordinates.r120.x, this.coordinates.r120.y, this.coordinates.r240.x, this.coordinates.r240.y  )
        square(this.coordinates.r0.x,this.coordinates.r0.y, 3)
    }
    getCoords(){
        let mouse = createVector(mouseX, mouseY)
        this.facing = p5.Vector.sub(this.pos,mouse).normalize()
        this.facing.mult(10)
        this.coordinates.r0 = p5.Vector.sub(this.pos, createVector(this.facing.x, this.facing.y))
        this.facing.rotate(120)
        this.coordinates.r120 = p5.Vector.sub(this.pos, createVector(this.facing.x, this.facing.y))
        this.facing.rotate(120)
        this.coordinates.r240 = p5.Vector.sub(this.pos,createVector(this.facing.x, this.facing.y))
    }
    checkPositioningInCanvas(){
        if (this.pos.x > this.canvas.width){
            this.pos.x = 0
        }
        if(this.pos.x<0){
            this.pos.x = this.canvas.width
        }
        if (this.pos.y > this.canvas.height){
            this.pos.y = 0
        }
        if(this.pos.y<0){
            this.pos.y = this.canvas.height
        }
    }
    fire(environment:Environment){
        let mouse = createVector(mouseX, mouseY)
        let bullet = new Bullet(
            this.coordinates.r0,
            p5.Vector.sub( mouse, this.coordinates.r0),
            ((this.vel.mag()+this.acc.mag())>2?(this.vel.mag()+this.acc.mag()):2)*2, 
            environment)
        environment.objects.push(bullet)
    }

}