var GameObject = /** @class */ (function () {
    function GameObject(pos, vel) {
        this.pos = pos;
        this.vel = vel;
    }
    GameObject.prototype.draw = function () { };
    GameObject.prototype.move = function () {
        this.pos.add(this.vel);
    };
    return GameObject;
}());
