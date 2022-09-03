class Bullet extends GameObject {
    pos: p5.Vector;
    vel: p5.Vector;
    env: Environment;
    speed: number;
    /**
     *
     */
    constructor(pos, vel,speed, env) {
        super(pos, vel);
        this.vel = this.vel.normalize().mult(speed)
        this.env = env
        
    }
    draw(){
        fill(255,0,0)
        square(this.pos.x, this.pos.y, 6)
    }
    move(){
        this.pos = p5.Vector.add(this.pos, this.vel)
        this.checkDespawn()
    }
    checkDespawn(){
        if(this.checkPositioningInCanvas()){
            this.env.objects.splice(this.env.objects.indexOf(this),1)
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
}