var GameObject = /** @class */ (function () {
    function GameObject(pos, vel, size) {
        this.pos = pos;
        this.vel = vel;
        this.size = size;
    }
    GameObject.prototype.draw = function () { };
    GameObject.prototype.move = function () {
        this.checkPositioningInCanvas();
        this.pos.add(this.vel);
    };
    GameObject.prototype.checkPositioningInCanvas = function () {
    };
    return GameObject;
}());
