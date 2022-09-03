class GameObject{
    pos: p5.Vector;
    vel: p5.Vector;
    constructor(pos,vel){
        this.pos = pos
        this.vel = vel
    }
    draw(){}
    move(){
        this.pos.add(this.vel)
    }
}