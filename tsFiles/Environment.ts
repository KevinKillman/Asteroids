class Environment{
    objects: GameObject[];
    bullets: Bullet[];
    asteroids: Asteroid[];
    canvas:any;
    constructor(canvas){
        this.objects = []
        this.bullets = []
        this.asteroids = []
        this.canvas = canvas
    }
    checkCollisions(){

    }
}