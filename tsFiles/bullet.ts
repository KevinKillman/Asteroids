class Bullet extends GameObject {
    pos: p5.Vector;
    vel: p5.Vector;
    env: Environment;
    speed: number;
    size: number;
    /**
     *
     */
    constructor(pos, vel,size, speed, env) {
        super(pos, vel,size);
        this.vel = this.vel.normalize().mult(speed)
        this.env = env
        
    }
    draw(){
        fill(255,0,0)
        square(this.pos.x, this.pos.y, this.size)
    }
    move(){
        this.pos = p5.Vector.add(this.pos, this.vel)
        this.checkDespawn()
    }
    checkDespawn(){
        if(this.checkPositioningInCanvas()){
            this.despawn()
        }
        
    }
    checkPositioningInCanvas(){
        if (this.pos.x > this.env.canvas.width){
            return true
        }
        if(this.pos.x<0){
            return true
        }
        if (this.pos.y > this.env.canvas.height){
            return true
        }
        if(this.pos.y<0){
            return true
        }
        return false
    }
    despawn(){
        if(this.env.objects.length>1){this.env.objects.splice(this.env.objects.indexOf(this),1)}
        this.env.bullets.splice(this.env.bullets.indexOf(this),1)
    }
    detect(asteroid:Asteroid){

    }
}