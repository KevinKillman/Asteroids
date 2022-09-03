class Ray {
    length:number;
    numberOfRays: number;
    constructor(){
        this.length=0;
        this.numberOfRays=0;
    }
    draw(length, numberOfRays){
        stroke(0,200,0)
        strokeWeight(2)
        this.length = length
        this.numberOfRays=numberOfRays
        let maus = createVector(mouseX,mouseY)
        let up =createVector(0,1)
        up.mult(this.length)
        let times = this.numberOfRays
      
        for(let i = 0;i<=times-1;i++){
          let ray = p5.Vector.sub(maus,up)
          line(maus.x, maus.y,ray.x, ray.y)
          up.rotate((1/times)*360)
        }
    }
}