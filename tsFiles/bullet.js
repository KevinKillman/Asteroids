var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    /**
     *
     */
    function Bullet(pos, vel, speed, env) {
        var _this = _super.call(this, pos, vel) || this;
        _this.vel = _this.vel.normalize().mult(speed);
        _this.env = env;
        return _this;
    }
    Bullet.prototype.draw = function () {
        fill(255, 0, 0);
        square(this.pos.x, this.pos.y, 6);
    };
    Bullet.prototype.move = function () {
        this.pos = p5.Vector.add(this.pos, this.vel);
        this.checkDespawn();
    };
    Bullet.prototype.checkDespawn = function () {
        if (this.checkPositioningInCanvas()) {
            this.env.objects.splice(this.env.objects.indexOf(this), 1);
        }
    };
    Bullet.prototype.checkPositioningInCanvas = function () {
        if (this.pos.x > this.env.canvas.width) {
            return true;
        }
        if (this.pos.x < 0) {
            return true;
        }
        if (this.pos.y > this.env.canvas.height) {
            return true;
        }
        if (this.pos.y < 0) {
            return true;
        }
        return false;
    };
    return Bullet;
}(GameObject));
