class Asteroid extends GameObject{
    pos: p5.Vector;
    vel: p5.Vector;
    coordinates: p5.Vector[];
    canvas: any;
    randNum:number;
    firstVertex:p5.Vector;
    randArray: number[];
    /**
     *
     */
    constructor(pos, vel, canvas) {
        super(pos, vel);
        this.randNum = 8;
        this.randArray = [];
        this.coordinates = [];
        this.canvas = canvas;
        this.firstVertex;
        for(let i = 0; i<this.randNum;i++){
            this.randArray.push(random(15,30))
        }


    }
    move(): void {
        this.checkPositioningInCanvas()
        this.pos.add(this.vel)
    }
    draw(): void {
        beginShape();
        this.getCoords();
        endShape()
    }

    getCoords(){
        let randVector = createVector(0,-1)
        let first = true;
        for(let i=0;i<=this.randNum-1;i++){
            let newCoord = randVector.copy()

            randVector.rotate((1/this.randNum)*360)
            let vertexPT = p5.Vector.sub(this.pos,p5.Vector.mult(newCoord,this.randArray[i]))
            this.coordinates.push(vertexPT.copy())
            if(first){
                first=false;
                this.firstVertex = vertexPT.copy()
            }
            vertex( vertexPT.x, vertexPT.y);
        }
        vertex(this.firstVertex.x, this.firstVertex.y)
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

}