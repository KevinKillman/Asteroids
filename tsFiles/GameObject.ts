class GameObject{
    pos: p5.Vector;
    vel: p5.Vector;
    size: number;
    constructor(pos,vel,size){
        this.pos = pos
        this.vel = vel
        this.size = size
    }
    draw(){}
    move(){
        this.checkPositioningInCanvas()
        this.pos.add(this.vel)
    }
    checkPositioningInCanvas(){

    }
}